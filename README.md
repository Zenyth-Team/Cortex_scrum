# Sterling & Co.
## Problemática: 
Nuestro proyecto se enfoca en la gestión de inventario de una empresa ficticia Sterling & Co. El objetivo principal es implementar una base de datos que permita la trazabilidad de productos, el control de stock mediante niveles mínimos, la verificación de fechas de vencimiento, la generación de alertas automáticas cuando se alcancen niveles críticos de inventario y el registro contable de las ventas.

## Disposición general del equipo de trabajo:

**Scrum Master:** David Daniel Nuñéz Ruiz.

**Product Owner:** Sebastián Fredy Gonzalez Pereira.

**Dev´s:** Diego Marengo, Ignacio Jorquera, Matias Horvath. 
## Características de Enfoque/Funcionales

* **Gestión de productos:** Registro con códigos SKU únicos y validación de precios o cantidades no negativas.
* **Escaneo de precios:** Sistema de consulta mediante códigos SKU para obtener información rápida del producto.
* **Reportes y gráficas:** Visualización de productos más vendidos y gráficas de reposición de stock filtradas por fecha.
* **Ubicación de productos:** Identificación rápida de la sección exacta de la tienda donde se encuentra cada artículo.
* **Resumen financiero:** Cálculo automático de ingresos mensuales y del valor total del capital invertido en bodega.
* **Autoguardado local:** Respaldo automático de movimientos e inventario para evitar pérdida de datos al cerrar la aplicación.
* **Generador de órdenes de compra:** Creación automática de documentos PDF con datos prellenados del proveedor ante falta de stock.
* **Venta a granel:** Soporte para venta de productos por peso o unidades fraccionadas con actualización de inventario.
* **Alertas de stock crítico:** Notificaciones automáticas cuando un producto alcanza el nivel mínimo de existencias definido.

## Figma
Link: https://carry-pack-20330348.figma.site/

# Stack:

## Decisión Arquitectonica: 
Se ha optado por una arquitectura monolítica organizada en tres capas lógicas. Esta decisión permite centralizar la lógica de negocio y facilitar el despliegue de la página web sin la complejidad de microservicios.

**Capa de Presentación (Frontend):** Diseñada en HTML5, CSS3 y JavaScript, asegurando una interfaz responsiva y dinámica que refleje fielmente el diseño de Figma. Utiliza JavaScript para el escaneo de códigos SKU y la interactividad de las gráficas.

**Capa de Lógica de Negocio (Backend):** Implementada en Python utilizando el micro-framework Flask. Esta capa gestiona el control de stock crítico, la verificación de fechas de vencimiento y el cálculo automático de ingresos financieros.

**Capa de Datos (Persistencia):** Basada en SQLite. Se elige esta base de datos relacional por su capacidad de "Autoguardado local" mediante un archivo persistente, eliminando la necesidad de configurar servidores de base de datos externos y garantizando la trazabilidad de los productos.

## Atributos:
**Escalabilidad:** Capacidad de manejar un aumento en la carga (usuarios, datos) sin degradar rendimiento.

**Disponibilidad:** El tiempo que el sistema está operativo y accesible.

**Mantenibilidad:** Corregir errores o agregar nuevas funcionalidades.

**Seguridad:** Protección de datos y resistir ataques malintencionados.

**Rendimiento:** Tiempos de respuesta y uso de recursos bajo condiciones específicas.
