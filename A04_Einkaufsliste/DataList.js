"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = [
    { product: "Apfel", checked: "clicked", category: "Obst und Gemüse", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Joghurt", checked: "clicked", category: "Milch und Käse", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Kuchen", checked: "clicked", category: "Backwaren", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Waschmittel", checked: "clicked", category: "Haushaltsmittel", date: "25.04.2024", amount: 2,
        comment: " ", delete: "clicked" }
];
for (var _i = 0, data_1 = exports.data; _i < data_1.length; _i++) {
    var entry = data_1[_i];
    console.log(entry);
}
