interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Azure Data Platform',
    description: `Arquitectura completa de plataforma de datos en Azure utilizando Data Factory, 
    Databricks, Synapse Analytics y Power BI para análisis empresarial a gran escala.`,
    imgSrc: '/static/images/azure-data-platform.png',
    href: 'https://github.com/Rafamg96',
  },
  {
    title: 'MLOps Pipeline',
    description: `Pipeline completo de MLOps con seguimiento de experimentos, versionado de modelos, 
    CI/CD automatizado y despliegue en producción usando Azure ML y GitHub Actions.`,
    imgSrc: '/static/images/mlops-pipeline.png',
    href: 'https://github.com/Rafamg96',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: `Dashboard de análisis en tiempo real procesando streams de datos con Azure Stream 
    Analytics y visualización interactiva con React y D3.js.`,
    imgSrc: '/static/images/realtime-dashboard.png',
    href: 'https://github.com/Rafamg96',
  },
]

export default projectsData
