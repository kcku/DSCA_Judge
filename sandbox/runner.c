/*******************************************************************************
 * The Sandbox Libraries (Core) - C Sample Program                             *
 *                                                                             *
 * Copyright (C) 2012-2013 LIU Yu, pineapple.liu@gmail.com                     *
 * All rights reserved.                                                        *
 *                                                                             *
 * Redistribution and use in source and binary forms, with or without          *
 * modification, are permitted provided that the following conditions are met: *
 *                                                                             *
 * 1. Redistributions of source code must retain the above copyright notice,   *
 *    this list of conditions and the following disclaimer.                    *
 *                                                                             *
 * 2. Redistributions in binary form must reproduce the above copyright        *
 *    notice, this list of conditions and the following disclaimer in the      *
 *    documentation and/or other materials provided with the distribution.     *
 *                                                                             *
 * 3. Neither the name of the author(s) nor the names of its contributors may  *
 *    be used to endorse or promote products derived from this software        *
 *    without specific prior written permission.                               *
 *                                                                             *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" *
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE   *
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE  *
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE    *
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR         *
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF        *
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS    *
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN     *
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)     *
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE  *
 * POSSIBILITY OF SUCH DAMAGE.                                                 *
 ******************************************************************************/

#include <sysexits.h>
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <sandbox.h>

typedef action_t* (*rule_t)(const sandbox_t*, const event_t*, action_t*);

typedef struct {
    sandbox_t sbox;
    policy_t default_policy;
    rule_t sc_table[32768];
} minisbox_t;

const char *result_name[] = {
	"PD", "OK",
	"Restricted Function",
	"Memory Limit Exceeded",
	"Output Limit Exceeded",
	"Time Limit Exceeded",
	"Runtime Error",
	"Abnormal Termination",
	"Internal Error",
	"BP", NULL
};

long unsigned ts2ms(struct timespec ts) {
    return ts.tv_sec * 1000 + ts.tv_nsec / 1000000;
}

int main(int argc, const char* argv[]) {
    if (argc < 4) return EX_USAGE;
    
    minisbox_t msb;
    
    if (sandbox_init(&msb.sbox, &argv[3])) {
        fprintf(stderr, "sandbox initialization failed\n");
        return EX_DATAERR;
    }
    msb.sbox.task.ifd = STDIN_FILENO;
    msb.sbox.task.ofd = STDOUT_FILENO;
    msb.sbox.task.efd = STDERR_FILENO;
    msb.sbox.task.quota[S_QUOTA_CPU]       = atoi(argv[1]);
    msb.sbox.task.quota[S_QUOTA_MEMORY]    = atoi(argv[2]) << 10;
    msb.sbox.task.quota[S_QUOTA_DISK]      = 10485760; /* 10 mb */
    msb.sbox.task.quota[S_QUOTA_WALLCLOCK] = 10000;    /* 10 s  */
    
    if (!sandbox_check(&msb.sbox)) {
        fprintf(stderr, "sandbox pre-execution state check failed\n");
        return EX_DATAERR;
    }
    result_t res = *sandbox_execute(&msb.sbox);
    
    fprintf(stderr, "{");
    fprintf(stderr, "\"status\":\"%s\",", result_name[res]);
    fprintf(stderr, "\"timeUsed\":%lu,", ts2ms(msb.sbox.stat.cpu_info.clock));      /* in ms */
    fprintf(stderr, "\"memoryUsed\":%lu", msb.sbox.stat.mem_info.vsize_peak >> 10); /* in kb */
    fprintf(stderr, "}");
    
    sandbox_fini(&msb.sbox);
}
