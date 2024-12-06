const systemMessage = {
    role: 'system',
    content: `Eres un experto en gestión de inventarios. Tus funciones incluyen:
    - Monitoreo de existencias: Llevar un control preciso de los productos disponibles, asegurando que nunca haya faltantes ni excesos.
    - Generación de alertas: Avisar sobre niveles bajos de inventario o productos cercanos a la fecha de vencimiento.
    - Optimización de inventario: Sugerencias sobre cuándo y cuánto reabastecer para mantener un flujo eficiente.
    - Reportes de inventario: Proporcionar informes claros y organizados sobre movimientos y estado del inventario.

    Si te hacen preguntas o comentarios que no están relacionados con la gestión de inventarios:
    - Responde de forma breve y concisa, limitando la respuesta a un máximo de 2-3 frases.
    - Evita entrar en detalles extensos sobre esos temas.
    - Si es posible, redirige la conversación hacia temas relacionados con inventarios.
    - Concluye el tema ajeno con una frase que sugiera volver al tema principal, como: "Este es un tema interesante, pero volvamos a hablar sobre la gestión de inventarios."

    Siempre mantén un tono profesional y útil si es posible proporcionar los siguientes datos a tus respuestas:`
};

const inventoryUpdates = [];
const addInventoryUpdate = (update) => {
    inventoryUpdates.push(update);
    systemMessage.content += `\n- ${update}`;
};

addInventoryUpdate(
    `
    {
  "productos": [
    {
      "id": 1,
      "articulo": "manzana",
      "stock": 3,
      "precio": 0.50,
      "unidad": "kg",
      "tipo": "fruta",
      "comentarios": "Producto fresco"
    },
    {
      "id": 2,
      "articulo": "leche deslactosada",
      "stock": 20,
      "precio": 1.20,
      "unidad": "litro",
      "tipo": "lácteo",
      "comentarios": "Recién añadido al inventario"
    },
    {
      "id": 3,
      "articulo": "arroz",
      "stock": 50,
      "precio": 0.80,
      "unidad": "kg",
      "tipo": "grano",
      "comentarios": "Al 50% de capacidad"
    },
    {
      "id": 4,
      "articulo": "agua purificada",
      "stock": 5,
      "precio": 0.60,
      "unidad": "litro",
      "tipo": "bebida",
      "comentarios": "Considerar reabastecer pronto"
    },
    {
      "id": 5,
      "articulo": "harina",
      "stock": 10,
      "precio": 0.70,
      "unidad": "kg",
      "tipo": "grano",
      "comentarios": "2 paquetes vencidos retirados"
    },
    {
      "id": 6,
      "articulo": "naranja",
      "stock": 0,
      "precio": 0.40,
      "unidad": "kg",
      "tipo": "fruta",
      "comentarios": "Producto agotado"
    },
    {
      "id": 7,
      "articulo": "azúcar",
      "stock": 9,
      "precio": 0.50,
      "unidad": "kg",
      "tipo": "grano",
      "comentarios": "Nivel bajo, menos del 10%"
    },
    {
      "id": 8,
      "articulo": "papel higiénico",
      "stock": 100,
      "precio": 0.30,
      "unidad": "unidad",
      "tipo": "higiene",
      "comentarios": "Suficiente para 2 semanas"
    },
      "id": 9,
      "articulo": "café",
      "stock": 60,
      "precio": 3.00,
      "unidad": "kg",
      "tipo": "bebida",
      "comentarios": "Niveles óptimos, no reabastecer"
    },
    {
      "id": 10,
      "articulo": "jabón líquido",
      "stock": 40,
      "precio": 1.50,
      "unidad": "litro",
      "tipo": "limpieza",
      "comentarios": "Excedió límite recomendado"
    }
  ]
}
`
)

addInventoryUpdate(
    `
    {
      "proveedores": [
        {
          "id": 1,
          "articulo": "manzana",
          "proveedor": "Frutas Frescas S.A.",
          "contacto": "frutas@frescas.com",
          "telefono": "555-1234"
        },
        {
          "id": 2,
          "articulo": "leche deslactosada",
          "proveedor": "Lácteos del Valle",
          "contacto": "ventas@lacteosvalle.com",
          "telefono": "555-5678"
        },
        {
          "id": 3,
          "articulo": "arroz",
          "proveedor": "Granos Selectos",
          "contacto": "contacto@granosselectos.com",
          "telefono": "555-9876"
        }
      ]
    }
    `
)


export { systemMessage };