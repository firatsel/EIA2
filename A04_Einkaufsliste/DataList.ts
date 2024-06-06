namespace A04_Einkaufsliste {
    export interface Product {
      product: string;
      checked: boolean;
      category: string;
      date: string;
      amount: number;
      comment: string;
      delete: string;
    }
}

export let data = 
    [
        {product: "Apfel", checked: "clicked", category: "Obst und Gemüse", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Joghurt", checked: "clicked", category: "Milch und Käse", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Kuchen", checked: "clicked", category: "Backwaren", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Waschmittel", checked: "clicked", category: "Haushaltsmittel", date: "25.04.2024", amount: 2, 
        comment: " ", delete: "clicked"}
    ]
    
