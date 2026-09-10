# Informe de verificación · Daniel Alejandro

Entrega del 10 de septiembre de 2026. Proyecto: `daniel-alejandro-portfolio`.

## Correcciones y contenido

Se recuperó el último ZIP disponible del proyecto original y se creó una carpeta nueva. Se conservaron la estética oscura, los acentos cian y violeta, la geometría procedural 3D y el fallback SVG.

Se corrigieron identidad, iniciales DS, favicon, presentación, textos del núcleo visual, datos de proyectos, habilidades, formación ONE, educación, experiencia práctica, investigación en exploración, contacto, metadatos, nombre del paquete, lockfile y README. La ruta preparada del CV es `/cv/daniel-solarte-cv.pdf`, con el botón desactivado.

Los datos incorporados corresponden a Daniel Alejandro Solarte López: estudiante de Ingeniería de Sistemas en la Universidad del Cauca, procedente de Cali, aproximadamente octavo semestre; perfil centrado en backend, bases de datos e IA. Se incluyeron idiomas como niveles declarados aproximados, fútbol, intereses, posible investigación de tesis y memristores. No se añadieron empleos, fechas laborales, títulos oficiales de certificados ni credenciales inventadas.

Lottery Predictor aparece en desarrollo, con MiLoto, Baloto/Revancha y ColorLoto; sus planes estadísticos y de ML están separados de las áreas trabajadas. Telco Customer Churn conserva los cuatro resultados académicos aproximados suministrados. El experimento de fondo de ojo indica FAU, unas 45 imágenes, validation accuracy aproximada de 0.6429 y ausencia de validación clínica. Orbs Paws y las otras ideas futuras no se presentan como proyectos terminados.

## Pendientes

GitHub, LinkedIn, correo profesional, CV real, repositorios, demos, imágenes reales de proyectos, títulos oficiales/fechas/identificadores/URLs y archivos de los certificados, y fechas exactas de educación. Se muestran marcadores claros y controles desactivados; no hay enlaces ficticios. Las portadas de código se identifican como conceptuales.

## Verificación técnica

Entorno de ejecución: Linux, Node.js v24.19.0 y npm 11.9.0. Las instrucciones de Windows están documentadas; no se ejecutaron en un equipo Windows.

| Comando | Resultado |
| --- | --- |
| `npm ci` | Código de salida 0; instalación limpia de 432 paquetes |
| `npm run lint` | Código de salida 0; sin errores ni advertencias de ESLint |
| `npm run typecheck` | Código de salida 0; TypeScript sin errores |
| `npm run build` | Código de salida 0; compilación y exportación estática correctas |

Además, se extrajo el ZIP en una carpeta nueva sin dependencias ni archivos generados y se repitieron `npm ci`, `npm run lint`, `npm run typecheck` y `npm run build`: los cuatro finalizaron con código 0. Esta comprobación confirma que los archivos entregados permiten una instalación y compilación independientes.

El build final generó `/`, `/_not-found` e `/icon.svg`. Se ejecutó después de retirar la página temporal de pruebas. npm mostró una advertencia sobre una configuración de proxy del entorno y, durante la instalación, un aviso de deprecación de ESLint 9.39.5; ambos se distinguen del resultado satisfactorio de lint. Se conservaron las versiones del proyecto recuperado.

Verificación HTTP de producción: 30 archivos de la exportación y 11 referencias de recursos del HTML respondieron 200 con contenido. Metadatos de Daniel y `robots: noindex, nofollow` confirmados. El CV inexistente y la página de pruebas eliminada respondieron 404, como se esperaba.

## Revisión visual e interacciones

- Escritorio: nombre completo, portada, biografía, investigación, tres proyectos, dos entradas ONE, seis grupos de habilidades, educación, experiencia práctica, contacto y pie revisados visualmente.
- Móvil: las mismas secciones revisadas en una captura completa de 390 píxeles de ancho. Textos largos y etiquetas se distribuyen sin recortes.
- Sin desbordamiento horizontal en anchos de contenido CSS de 320, 390, 768 y 1348 píxeles; se compararon `scrollWidth` y `clientWidth`.
- Menú móvil: apertura, cierre con Escape y cierre al elegir Contacto comprobados.
- Filtros: Programación muestra Java; Desarrollo web muestra Spring Boot; Todos muestra dos entradas; Idiomas muestra el estado vacío.
- Modal: apertura, contenido pendiente, cierre por botón y Escape, apertura mediante Enter y restauración del foco a la tarjeta comprobados. Diseño revisado en escritorio y móvil. Foco visible y reglas de movimiento reducido conservados en el código.
- Detalle de Lottery Predictor: apertura del desplegable y separación entre áreas trabajadas y planes posteriores verificadas.
- Consola de la vista previa: no se observaron errores o advertencias atribuibles al sitio. El navegador registró errores propios de una extensión, ajenos al portafolio.

## Límites de la revisión

La revisión se realizó con la vista previa supervisada de Sites, sin despliegue. Los tamaños móviles se verificaron mediante un iframe de dimensiones CSS controladas en Chrome de escritorio; no equivalen a una prueba en hardware móvil ni cubren todos los navegadores. Para las capturas completas se amplió la altura del iframe, manteniendo el ancho revisado.

WebGL2 devolvió `false` en el navegador de revisión. Se verificó visualmente la alternativa 2D; **no se revisó visualmente la animación 3D**. El código de la escena compiló, pero su movimiento, pausa y rendimiento requieren una comprobación posterior en un navegador con WebGL2. La preferencia de movimiento reducido estaba desactivada; su rama y las reglas CSS se inspeccionaron en el código, sin simular una preferencia del sistema. La revisión visual de contraste no constituye una auditoría integral de accesibilidad.

## Empaquetado y publicación

El ZIP nuevo tiene la carpeta raíz `daniel-alejandro-portfolio/`. Incluye código, documentación, capturas nuevas, `.gitignore`, `package-lock.json` y carpetas de recursos conservadas mediante `.gitkeep`. No incluye `node_modules`, `.next`, `out/`, `.git`, cachés, logs, secretos, variables de entorno reales, herramientas temporales ni capturas antiguas. No se eligió una licencia.

La búsqueda global en archivos propios, configuración, documentación y nombres de recursos no encontró referencias a la identidad anterior ni a sus iniciales y rutas. No se modificaron dependencias de terceros para efectuar sustituciones.

La carpeta recuperada no contenía historial Git: `git status` indicó que no era un repositorio. > Nota histórica: este informe se generó inicialmente antes de la publicación. Posteriormente, el repositorio se subió a GitHub y el commit `91969c3` incorporó el despliegue mediante GitHub Actions. Los trabajos `Build` y `Deploy` finalizaron correctamente. La vista previa temporal quedó detenida. El ZIP original permanece intacto.

Capturas incluidas: `daniel-alejandro-escritorio.jpg` (1348 × 6449) y `daniel-alejandro-movil.jpg` (390 × 11120), disponibles también en `docs/capturas/` dentro del proyecto.
