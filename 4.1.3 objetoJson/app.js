[
    /*jugador*/ 
    {
        "nombre": "Andreia",
        "apellidos": "Gomes de Souza",
        "fecha_nacimiento": "07-08-1986",
        "puntuacion": 1500
    },
    /*Pelicula*/ 
    {
        "titulo": "El Conde de Montecristo",
        "sinopsis": "Tras pasar 13 años en prisión injustamente encarcelado, Edmundo Dantés logra fugar para maquinar una diabólica venganza contra sus enemigos.",
        "fecha_estreno": "1934-03-15",
        "edad_recomendada": 13,
        "genero": "Drama de época",
        "sesiones": [
        {"sala": 1, "horario": "16:30"},
        {"sala": 2, "horario": "19:30"},
        {"sala": 3, "horario": "22:30"}
        ]
    },
    /*Crucero*/ 
    {
        "titulo": "Caribe23",
        "puerto_salida": "Miami",
        "descripcion": "Crucero por el Caribe visitando las islas más hermosas de la zona.",
        "fecha_inicio": "10-05-2023",
        "fecha_fin": "15-05-2023",
        "precio_persona": 1500,
        "ruta": [
        {"ciudad": "Cozumel", "pais": "México", "dias": 2},
        {"ciudad": "George Town", "pais": "Islas Caimán", "dias": 1},
        {"ciudad": "Ocho Rios", "pais": "Jamaica", "dias": 2},
        ]
    },

    /*Groupons de un servicio*/ 
  
    {
        "nombre": "10 clases de tenis",
        "descripcion": "Aprende a jugar al tenis con un instructor profesional.",
        "categoria": "Deportes",
        "descuento": 50,
        "precio_inicial": 100,
        "precio_final": 50
    },

    /*video juego*/ 

    {
        "titulo": "The Legend of Zelda: Breath of the Wild, Edición Estándar",
        "genero": ["Acción"],
        "pegi": 12,
        "precio": 60.70,
        "desarrollador": "Nintendo",
        "editor": "Nintendo",
        "fecha_lanzamiento": "03-03-2017",
        "plataformas": ["Nintendo Switch", "Wii U"],
        "idiomas": ["Español", "Inglés", "Francés", "Alemán", "Italiano"]
    },

    /*Campeones*/ 

    {   
        "nombre": "Arthas Menethil",
        "tipo_campeon": "Legendario",
        "rango": "Rey Exánime",
        "nivel_rango": 10,
        "habilidades": ["Frostmourne", "Invocar esbirros no-muertos"],
        "equipamento":[ {
                "arma": "espada", "armadura": "escudo divino",
                "casco": "casco de dragón","guantes": "guantelete de poder","calzado": "botas veloces",  
            }
        ],

    },

 /*Factura*/ 

    {
        "fecha_emision": "16-02-2023",
        "datos_completos": true,
        "productos": [
            {
                "nombre": "Producto 1",
                "cantidad": 2,
                "precio": 10.50
            },
            {
                "nombre": "Producto 2",
                "cantidad": 1,
                "precio": 20.00
            }
        ],
        "cliente": {
                "dni": "43470603M",
                "nombre": "Andreia",
                "apellido": "Gomes de Souza Aguilar",
                "email": "aga04@iesemilidarder.com",
                "telefono": "653352162",
                "direccion": {
                    "cp": "07010",
                    "calle": "Gaspar Sabater",
                    "numero": "6",
                    "piso": "1",
                    "puerta": "3"
                }
            }
    }
          

      
      
]