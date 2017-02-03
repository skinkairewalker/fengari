/*jshint esversion: 6 */
"use strict";

const BytecodeParser = require("./lundump.js");
const OC             = require('./lopcodes.js');

class LuaVM {

    constructor(L) {
        this.L = L;
    }

    RA(base, a) {
       return base + a;
    }

    RB(base, opcode, base, b) {
       return base + b;
    }

    RC(base, c) {
       return base + c;
    }

    RKB(base, k, b) {
        return OC.ISK(b) ? k[OC.INDEXK(b)] : base + b;
    }

    RKC(base, k, c) {
        return OC.ISK(c) ? k[OC.INDEXK(c)] : base + c;
    }

    execute() {
        let L = this.L;
        let ci = L.ci[this.L.ciOff];

        newframe:
        let cl = ci.func;
        let k = cl.p.k;
        let base = ci.base;

        for (;;) {
            let i = ci.savedpc[ci.pcOff++];
            let ra = this.RA(base, i.a);

            switch (OC.OpCodes[i.opcode]) {
                case "OP_MOVE":
                    break;
                case "OP_LOADK":
                    break;
                case "OP_LOADKX":
                    break;
                case "OP_LOADBOOL":
                    break;
                case "OP_LOADNIL":
                    break;
                case "OP_GETUPVAL":
                    break;
                case "OP_GETTABUP":
                    break;
                case "OP_GETTABLE":
                    break;
                case "OP_SETTABUP":
                    break;
                case "OP_SETUPVAL":
                    break;
                case "OP_SETTABLE":
                    break;
                case "OP_NEWTABLE":
                    break;
                case "OP_SELF":
                    break;
                case "OP_ADD":
                    break;
                case "OP_SUB":
                    break;
                case "OP_MUL":
                    break;
                case "OP_MOD":
                    break;
                case "OP_POW":
                    break;
                case "OP_DIV":
                    break;
                case "OP_IDIV":
                    break;
                case "OP_BAND":
                    break;
                case "OP_BOR":
                    break;
                case "OP_BXOR":
                    break;
                case "OP_SHL":
                    break;
                case "OP_SHR":
                    break;
                case "OP_UNM":
                    break;
                case "OP_BNOT":
                    break;
                case "OP_NOT":
                    break;
                case "OP_LEN":
                    break;
                case "OP_CONCAT":
                    break;
                case "OP_JMP":
                    break;
                case "OP_EQ":
                    break;
                case "OP_LT":
                    break;
                case "OP_LE":
                    break;
                case "OP_TEST":
                    break;
                case "OP_TESTSET":
                    break;
                case "OP_CALL":
                    break;
                case "OP_TAILCALL":
                    break;
                case "OP_RETURN":
                    break;
                case "OP_FORLOOP":
                    break;
                case "OP_FORPREP":
                    break;
                case "OP_TFORCALL":
                    break;
                case "OP_TFORLOOP":
                    break;
                case "OP_SETLIST":
                    break;
                case "OP_CLOSURE":
                    break;
                case "OP_VARARG":
                    break;
                case "OP_EXTRAARG":
                    break;
            }
        }
    }

}

module.exports = {
    LuaVM: LuaVM
};