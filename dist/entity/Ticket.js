"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var typeorm_1 = require("typeorm");
var Flight_1 = require("./Flight");
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Ticket.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Ticket.prototype, "passanger_email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Ticket.prototype, "isApproved", void 0);
    __decorate([
        typeorm_1.Column(""),
        __metadata("design:type", Number)
    ], Ticket.prototype, "qantity", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Flight_1.Flight; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Flight_1.Flight)
    ], Ticket.prototype, "flight", void 0);
    Ticket = __decorate([
        typeorm_1.Entity()
    ], Ticket);
    return Ticket;
}());
exports.Ticket = Ticket;
