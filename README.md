# Daniel Alejandro · Portafolio 3D

Portafolio personal de **Daniel Alejandro Solarte López**, estudiante de Ingeniería de Sistemas en la Universidad del Cauca. Primera versión de avance, con contenido revisado el 10 de septiembre de 2026.

Interfaz oscura con acentos cian y violeta, escena procedural 3D y alternativa SVG 2D. Construido con Next.js, React, TypeScript, Three.js, React Three Fiber, Drei, Motion y CSS. Exportación estática; no requiere backend ni variables de entorno.

## Estado del avance

Implementado:

- Identidad DS, presentación, intereses, investigación en exploración y objetivo profesional.
- Tres proyectos reales: Lottery Predictor en desarrollo, Telco Customer Churn y clasificación de imágenes de fondo de ojo como experiencias académicas completadas.
- Separación entre áreas trabajadas y planes posteriores de Lottery Predictor; métricas académicas aproximadas.
- Seis grupos de tecnologías utilizadas, educación en curso y experiencia práctica.
- Dos entradas descriptivas de formación ONE relacionada con Java y Spring Boot. Sus títulos oficiales permanecen pendientes.
- Navegación fija, menú móvil, filtros, modal nativo accesible, foco visible y enlaces pendientes desactivados.
- Escena 3D con carga diferida, pausa, adaptación a equipos limitados y alternativa 2D si no hay WebGL2 o se solicita movimiento reducido.
- Metadatos en español e indexación desactivada (`noindex, nofollow`).

Pendiente: GitHub, LinkedIn, correo profesional, CV real, URLs de repositorios y demos, imágenes reales de proyectos, títulos/fechas/identificadores/URLs e imágenes/PDF de certificados, y fechas exactas de educación. Las portadas de código son ilustraciones conceptuales, no capturas de aplicaciones. No hay experiencia laboral formal declarada. Edad, semestre e idiomas describen la información suministrada al actualizar el perfil y deben revisarse con el tiempo.

Consulta `docs/VERIFICACION.md` para los resultados y límites de la revisión. El código está disponible en [GitHub](https://github.com/DanielSolartel/daniel-alejandro-portfolio) y la versión actual está publicada en [GitHub Pages](https://danielsolartel.github.io/daniel-alejandro-portfolio/).

## Instalación en Windows

Requiere Node.js 20.9 o superior y npm. Extrae el ZIP y abre PowerShell dentro de `daniel-alejandro-portfolio`:

```powershell
node --version
npm --version
npm ci
npm run dev
```

Abre `http://localhost:3000`. Detén el servidor con `Ctrl+C`. También puedes ejecutar los mismos comandos desde WSL 2, manteniendo instalación y ejecución dentro del mismo entorno. No copies `node_modules` entre Windows y WSL.

El lockfile fija las versiones utilizadas. Usa `npm ci` para reproducir esta entrega.

## Verificación y compilación

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

`build` crea la exportación estática en `out/`. `npm start` sirve esa compilación localmente en `http://localhost:3000`; ejecuta primero el build. El servidor incluido es para revisión local. `out/`, `.next/` y `node_modules/` no forman parte del repositorio ni del ZIP.

## Dónde editar

| Archivo | Contenido |
| --- | --- |
| `src/data/portfolio.ts` | Identidad, biografía, enlaces, proyectos, métricas, certificados, tecnologías y trayectoria |
| `src/app/page.tsx` | Secciones y estructura |
| `src/app/globals.css` | Colores, estilos, puntos de adaptación y movimiento reducido |
| `src/app/layout.tsx` | SEO, Open Graph, idioma e indexación |
| `src/app/icon.svg` | Favicon DS |
| `src/components/digital-core.tsx` | Carga 3D y alternativa 2D |
| `src/components/core-scene.tsx` | Geometría y animación procedural |
| `src/components/certificate-gallery.tsx` | Filtros y modal de certificados |

Los datos pendientes usan `null` o `Pendiente por completar`; evita URLs ficticias. `label` identifica de forma descriptiva la formación ONE y `name` se reserva para el título oficial del certificado. `scope` enumera áreas trabajadas de un proyecto y `roadmap` contiene planes futuros.

## Agregar el CV

1. Copia el PDF real en `public/cv/daniel-solarte-cv.pdf`.
2. Conserva `cv.path: "/cv/daniel-solarte-cv.pdf"` en los datos.
3. Cambia `cv.available` a `true` solo cuando el archivo exista.
4. Compila y comprueba que el enlace abre el PDF.

Por ahora, el botón permanece desactivado y muestra que el recurso está pendiente.

## Agregar imágenes y certificados

- Proyectos: guarda imágenes propias en `public/images/projects/` y completa `image` con una ruta como `/images/projects/lottery-predictor.webp` y un `imageAlt` descriptivo. Hasta entonces se muestra una portada conceptual con el aviso de imagen pendiente.
- Certificados: imágenes en `public/images/certificates/` y PDFs en `public/certificates/`. Completa `image`, `imageAlt` y `pdf` en la entrada correspondiente.
- Reemplaza el `name` pendiente por el título exacto del certificado real; completa `date`, `credentialId` y `verificationUrl` exclusivamente con datos comprobados. Cambia `pending` a `false` cuando la entrada esté completa.
- Usa una categoría de `certificateCategories` o actualiza ese catálogo y su tipo si añades una. Los filtros muestran una indicación vacía cuando todavía no hay entradas.

Las rutas públicas empiezan por `/`, sin el prefijo `public`. Las carpetas vacías se conservan mediante `.gitkeep`.

## Completar contacto y proyectos

En `src/data/portfolio.ts`, reemplaza los `null` de `links.github`, `links.linkedin` y `contact.email` por tus valores reales. El correo se almacena sin `mailto:`. En cada proyecto completa `repository` y `demo` solamente si existen destinos reales. Los componentes validan protocolos y mantienen los controles pendientes sin enlaces falsos.

## Preparar el repositorio para GitHub

El ZIP contiene la carpeta raíz del proyecto, README, `.gitignore` y `package-lock.json`. No incluye dependencias, exportaciones, cachés, secretos, capturas anteriores ni historial Git.

Desde la raíz, revisa los archivos antes de crear el avance:

```powershell
git init
git status
git add .
git diff --cached --stat
```

Si ya existe un repositorio, conserva su historial y empieza con `git status`. Si tienes configurada tu identidad real de Git, puedes crear el commit:

```powershell
git commit -m "feat: personaliza el portafolio de Daniel Alejandro"
```

Después crea el repositorio en tu cuenta y sigue las instrucciones de GitHub para conectarlo y subirlo.El repositorio está inicializado, conectado a GitHub y utiliza la rama principal `main`. No se ha elegido una licencia: puedes añadirla cuando decidas sus términos.

## Publicarlo posteriormente

La versión actual se despliega automáticamente en GitHub Pages mediante GitHub Actions. Cuando decidas hacerlo:

1. Completa o revisa los datos pendientes y verifica el contenido que quieres hacer público.
2. Ejecuta las verificaciones y `npm run build`.
3. Configura un alojamiento estático que sirva `out/` o un proveedor compatible con Next.js. `.openai/hosting.json` describe el directorio de salida para Sites; no publica por sí solo.
4. Si eliges GitHub Pages bajo una subruta de repositorio, adapta `basePath` y las rutas de recursos propios antes de compilar; esta entrega usa rutas desde `/` y no presupone un destino.
5. Revisa el sitio publicado, configura la URL canónica y los metadatos definitivos; cambia `robots` solo cuando quieras permitir indexación.

No hacen falta claves ni un archivo `.env` para ejecutar el portafolio actual. `.gitignore` excluye variables de entorno reales.
