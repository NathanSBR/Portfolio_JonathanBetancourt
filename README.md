# Portafolio profesional de Jonathan Betancourt

Portafolio responsive creado con Next.js, TypeScript y Tailwind CSS. Posiciona a QA Automation Engineer como perfil principal y Software Automation, RPA, AI Engineer y Backend como áreas complementarias.

## Desarrollo local

```powershell
npm.cmd install
npm.cmd run dev
```

Abre `http://localhost:3000`.

## Personalización

- Edita `src/data/portfolio.ts` para cambiar datos, métricas, proyectos, experiencia, stack y enlaces.
- La fotografía está en `public/jonathan-betancourt-oficial.png`.
- El CV descargable está en `public/cv/Jonathan-Betancourt-CV.pdf`.
- Cada proyecto admite categoría, descripción, problema, solución, resultado, tecnologías, imagen, demo y repositorio.
- Configura `NEXT_PUBLIC_SITE_URL` con el dominio público antes del despliegue. Usa `.env.example` como referencia.
- La imagen social se genera en `/images/og-portfolio.png` desde `src/app/images/og-portfolio.png/route.tsx`.

## Verificación

```powershell
npm.cmd run lint
npm.cmd run build
```
