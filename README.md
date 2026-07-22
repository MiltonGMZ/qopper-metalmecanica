# Qopper S.A.S — Sitio web (Astro)

Base de código lista para implementar: Single-page industrial-tech para Qopper S.A.S,
inspirada en tu negocio real (arandelas, retenedores hidráulicos, tapones, repuestos técnicos).

## Sistema de diseño

- **Color** (paleta estricta, sin alterar): `#0A0A0A` negro · `#FFFFFF` blanco · `#999999` gris · `#E03E3E` rojo.
  Todos los derivados (glass, glow, líneas) son el mismo rojo/negro con opacidad — no se introdujo ningún color nuevo.
- **Tipografía**: *Chakra Petch* (display, ángulos técnicos) + *Inter* (texto) + *JetBrains Mono* (datos, contadores, tolerancias).
- **Elemento de firma**: la "regla graduada" (`.ruler`, clase reutilizable en `global.css`) y los
  "readouts" tipo instrumento de medición (`data-readout` en `TechProjects.astro`) — ambos conectados
  al negocio real (tolerancias en mm de piezas metalmecánicas), no decoración genérica.

## Estructura

```
src/
  layouts/Layout.astro       # <head>, fuentes, IntersectionObserver global de reveal
  components/
    Nav.astro                 # sticky nav + glassmorphism al hacer scroll
    Hero.astro                # video loop + grid digital + contador animado
    Solutions.astro           # grid de 4 tarjetas con hover 3D
    TechProjects.astro        # grid 2 columnas + parallax + readout de tolerancias
    DesignServices.astro      # 3 columnas, insignias circulares, stagger fade-in
    Footer.astro
  pages/index.astro           # ensambla todo
  styles/global.css           # tokens, utilidades, accesibilidad (reduced-motion, focus-visible)
public/
  media/                      # ← coloca aquí tus assets reales (ver abajo)
  favicon.svg
```

## Assets pendientes (placeholders a reemplazar)

El código referencia estos archivos que **debes reemplazar con tus propios recursos**:

| Ruta | Uso | Recomendación |
|---|---|---|
| `public/media/cnc-loop.mp4` | Fondo del Hero | Video en bucle, sin audio, torno CNC o partículas de metal. 1920×1080, <8MB, `muted loop playsinline`. |
| `public/hero-poster.jpg` | Poster del video (mientras carga) | Frame representativo del mismo video. |
| `public/media/brazo-robotico.jpg` | Columna izquierda de "Tecnología" | Foto de alta resolución, brazo robótico o soldadura láser. |
| `public/media/simulacion-cnc.mp4` | Franja inferior de "Proyectos" | Video de simulación técnica o mecanizado CNC. |

Si aún no tienes video, cambia temporalmente `<video>` por una imagen estática con la misma clase
(`.hero__media img`) — el resto de animaciones no dependen del video.

## Logo

Se implementó un isotipo mínimo (marca "Q" en rojo con esquina cortada) como placeholder, coherente
con el estilo del sitio actual de Qopper. Si tienes el logo original en SVG, reemplaza el bloque
`.nav__logo-mark` / `.footer__logo-mark` en `Nav.astro` y `Footer.astro` por tu `<img>` o `<svg>`.

## Instalación

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist listo para producción
```

## Notas técnicas

- **Cero frameworks de JS en cliente**: toda la interactividad (nav sticky, contador, parallax,
  reveal on scroll, hover 3D) es Astro + JS vanilla, sin React/Vue ni librerías de animación.
- **Rendimiento**: `astro.config.mjs` usa `inlineStylesheets: 'auto'`; imágenes deben servirse
  ya optimizadas (WebP/AVIF) — considera `astro:assets` si subes las tuyas a `src/assets/`.
- **Accesibilidad**: `prefers-reduced-motion` respetado globalmente, foco visible en todos los
  elementos interactivos, navegación por teclado en tarjetas (`tabindex`, `:focus-visible`).
- **Contenido**: los textos (soluciones, servicios, cifras del hero) son punto de partida editorial
  basado en tu catálogo actual — ajusta cifras y descripciones a tus datos reales antes de publicar.
