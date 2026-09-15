export const PENDING = "Pendiente por completar";
export type ProjectStatus = "Terminado" | "En desarrollo" | "Planeado";
export type CertificateCategory = "Programación" | "Inteligencia artificial" | "Desarrollo web" | "Idiomas" | "Otros";
export interface ProjectMetric { label: string; value: string }
export interface Project {
  id: string; name: string; description: string; status: ProjectStatus;
  kind: string; technologies: string[]; image: string | null; imageAlt: string;
  repository: string | null; demo: string | null; results: string[];
  coverLines: string[]; scope: string[]; roadmap: string[];
  metrics: ProjectMetric[]; metricsNote: string | null;
  date?: string; featured: boolean; pending: boolean;
}
export interface Certificate {
  id: string; label: string; name: string; institution: string; date: string;
  image: string | null; imageAlt: string; pdf: string | null;
  verificationUrl: string | null; credentialId: string;
  category: CertificateCategory; pending: boolean;
}
export interface SkillGroup { name: string; items: string[] }
export interface TimelineEntry {
  id: string; title: string; organization: string; status: string;
  startDate: string | null; endDate: string | null; description: string;
  highlights: string[]; technologies: string[];
}
export interface Portfolio {
  name: string; displayName: string; surname: string; initials: string;
  role: string; headline: string; biography: string; aboutStatement: string;
  aboutAccent: string; interests: string[]; featuredInterests: string[];
  objectives: string; origin: string; ageAtUpdate: number; profileUpdatedAt: string;
  personalNote: string; languages: string[]; location: string | null;
  availability: string | null; research: {title: string; status: string; description: string};
  futureIdeas: {name: string; description: string}[];
  scene: {topLabel: string; bottomLabel: string};
  links: {github: string | null; linkedin: string | null};
  contact: {email: string | null; message: string};
  cv: {path: string; available: boolean}; projects: Project[];
  certificates: Certificate[]; skills: SkillGroup[];
  experience: TimelineEntry[]; education: TimelineEntry[];
}
export const certificateCategories: CertificateCategory[] = ["Programación", "Inteligencia artificial", "Desarrollo web", "Idiomas", "Otros"];

// Contenido personal centralizado. Las URLs pendientes usan null para evitar enlaces falsos.
// Edad y semestre corresponden a la actualización indicada, no se calculan como credenciales.
export const portfolio: Portfolio = {
  name: "Daniel Alejandro Solarte López",
  displayName: "Daniel Alejandro",
  surname: "Solarte López",
  initials: "DS",
  role: "Estudiante de Ingeniería de Sistemas | Backend, Bases de Datos e Inteligencia Artificial",
  headline: "Construyo soluciones de software con enfoque en backend, bases de datos e inteligencia artificial, convirtiendo conocimientos académicos en proyectos reales.",
  aboutStatement: "Aprender construyendo.",
  aboutAccent: "De la universidad a proyectos reales.",
  biography: "Soy Alejandro, estudiante de Ingeniería de Sistemas en la Universidad del Cauca. Fortalezco mi perfil mediante proyectos personales y universitarios, con especial interés en backend, Java/Spring Boot y bases de datos. También he trabajado con Python, desarrollo web, sistemas distribuidos y Machine Learning.",
  featuredInterests: ["Backend", "Bases de datos", "Inteligencia artificial", "Arquitectura de software"],
  interests: ["Backend", "Bases de datos", "Ingeniería de software", "Inteligencia artificial", "Machine Learning", "Arquitectura de software", "Sistemas distribuidos", "Computación cuántica", "Computación neuromórfica", "Investigación tecnológica"],
  objectives: "Seguir creciendo en ingeniería de software y arquitectura, fortalecer mi experiencia en backend con Java/Spring Boot y Python, y explorar soluciones con bases de datos, inteligencia artificial y sistemas distribuidos.",
  origin: "Cali, Colombia", ageAtUpdate: 23, profileUpdatedAt: "2026-09-10",
  personalNote: "Fuera del código, mi deporte favorito es el fútbol.",
  languages: ["Inglés: nivel aproximado B2", "Italiano: conocimientos básicos"],
  location: null, availability: null,
  research: {
    title: "Computación cuántica y neuromórfica", status: "Línea de investigación en exploración",
    description: "Como posible línea de tesis, me interesa evaluar las amenazas actuales de la computación tradicional y compararlas con las capacidades, ventajas, limitaciones y posibles amenazas de la computación cuántica y neuromórfica. También quiero profundizar en el estudio de los memristores.",
  },
  futureIdeas: [
    {name:"Orbs Paws",description:"Idea para el registro y la gestión de perros callejeros en Popayán."},
    {name:"Exploración técnica",description:"Páginas web 3D y juegos de casino como futuros proyectos de programación y experimentación."},
  ],
  scene: {topLabel:"DS / EXPLORACIÓN DIGITAL",bottomLabel:"BACKEND · DATOS · POSIBILIDADES"},
    links: {
    github: "https://github.com/DanielSolartel",
    linkedin: null,
  },
  contact: {email:null,message:"Me interesa conversar sobre proyectos, oportunidades de aprendizaje y desarrollo de software."},
  cv: {path:"/cv/daniel-solarte-cv.pdf",available:false},
  projects: [
    {
      id:"lottery-predictor", name:"Lottery Predictor", status:"En desarrollo",kind:"MVP personal",
      description:"MVP orientado al análisis histórico y a la posterior exploración de modelos predictivos para MiLoto, Baloto/Revancha y ColorLoto. Su arquitectura separa dominio, persistencia, API, estadística y Machine Learning.",
      technologies:["Python","FastAPI","HTMX","SQLAlchemy","Alembic","PostgreSQL","Docker","Docker Compose","pytest","Git"],
      image:null,imageAlt:"Vista previa de Lottery Predictor",repository:"https://github.com/DanielSolartel/loteria-predictor",demo:null,
      coverLines:['class LotteryPredictor:', '    dominio → persistencia → API', '    validación · datos · pruebas', '', '# MVP en desarrollo'],
      scope:["Dominio y entidades","Persistencia y migraciones","Repositorios y casos de uso","Validaciones y API","Registro e importación de sorteos","Pruebas automatizadas"],
      roadmap:["Estadística y análisis histórico","Feature engineering y Machine Learning","Comparación de modelos y visualizaciones","Estrategias de generación de combinaciones"],
      results:[],metrics:[],metricsNote:null,featured:true,pending:false,
    },
    {
      id:"telco-churn",name:"Telco Customer Churn",status:"Terminado",kind:"Proyecto académico",
      description:"Proyecto de predicción de abandono de clientes mediante Machine Learning, con una metodología relacionada con CRISP-ML y evaluación de modelos con y sin balanceo de clases.",
      technologies:["Python","Pandas","Scikit-learn","MLPClassifier","SMOTE","Clasificación","Evaluación de modelos"],
      image:null,imageAlt:"Vista previa del proyecto Telco Customer Churn",repository:null,demo:null,
      coverLines:['# Telco Customer Churn', 'modelo = "MLPClassifier"', 'balanceo = "SMOTE"', '', '# Clasificación y evaluación'],
      scope:[],roadmap:[],results:[],metrics:[
        {label:"Accuracy sin balancear",value:"≈ 0.7899"},
        {label:"Accuracy después de SMOTE",value:"≈ 0.68"},
        {label:"MCC",value:"≈ 0.4297"},
        {label:"ROC-AUC",value:"≈ 0.82"},
      ],
      metricsNote:"Resultados académicos aproximados. No se especifican aquí las particiones ni configuraciones de cada evaluación.",
      featured:false,pending:false,
    },
    {
      id:"fondo-ojo",name:"Clasificación de imágenes de fondo de ojo",status:"Terminado",kind:"Proyecto académico",
      description:"Experimento de clasificación de imágenes de fondo de ojo con un dataset FAU de aproximadamente 45 imágenes, utilizando PCA y redes neuronales convolucionales.",
      technologies:["Python","TensorFlow","Keras","CNN","PCA","Preprocesamiento de imágenes","Evaluación de modelos"],
      image:null,imageAlt:"Vista previa del experimento de clasificación de fondo de ojo",repository:null,demo:null,
      coverLines:['# Clasificación de imágenes', 'dataset = "FAU"', 'técnicas = ["PCA", "CNN"]', '', '# Experimento académico'],
      scope:[],roadmap:[],results:[],metrics:[{label:"Validation accuracy",value:"≈ 0.6429"}],
      metricsNote:"Resultado académico aproximado sobre un conjunto pequeño de imágenes. Experimento sin validación clínica.",featured:false,pending:false,
    },
  ],
  certificates:[
    {id:"one-java",label:"Formación ONE relacionada con Java",name:PENDING,institution:"Oracle Next Education (ONE)",date:PENDING,image:null,imageAlt:"Certificado ONE relacionado con Java",pdf:null,verificationUrl:null,credentialId:PENDING,category:"Programación",pending:true},
    {id:"one-spring-boot",label:"Formación ONE relacionada con Spring Boot",name:PENDING,institution:"Oracle Next Education (ONE)",date:PENDING,image:null,imageAlt:"Certificado ONE relacionado con Spring Boot",pdf:null,verificationUrl:null,credentialId:PENDING,category:"Desarrollo web",pending:true},
  ],
  skills:[
    {name:"Lenguajes",items:["Java","Python","C","SQL","JavaScript","TypeScript","HTML","CSS"]},
    {name:"Backend",items:["Spring Boot","FastAPI","SQLAlchemy","Alembic","REST APIs","HTMX"]},
    {name:"Frontend",items:["Angular","React","Next.js","Vite","Bootstrap","Tailwind CSS"]},
    {name:"Bases de datos",items:["PostgreSQL","MySQL","SQLite","H2"]},
    {name:"Datos e inteligencia artificial",items:["NumPy","Pandas","Matplotlib","Seaborn","Scikit-learn","TensorFlow","Keras","PCA","CNN","MLPClassifier","SMOTE"]},
    {name:"Herramientas y sistemas distribuidos",items:["Git","Docker","Docker Compose","WSL 2","Java RMI","Sun RPC en C","pytest"]},
  ],
  experience:[{
    id:"experiencia-practica",title:"Proyectos personales y universitarios",organization:"Aprendizaje mediante proyectos",status:"Experiencia práctica",startDate:null,endDate:null,
    description:"Desarrollo de soluciones backend, bases de datos, sistemas distribuidos y proyectos de Machine Learning. Mi experiencia actual proviene de proyectos académicos y personales; todavía no tengo experiencia laboral formal.",
    highlights:[],technologies:["Backend","Bases de datos","Machine Learning","Sistemas distribuidos"],
  }],
  education:[{
    id:"ingenieria-sistemas",title:"Ingeniería de Sistemas",organization:"Universidad del Cauca",status:"En curso · aproximadamente octavo semestre",startDate:null,endDate:null,
    description:"Formación en desarrollo de software, bases de datos, inteligencia artificial, arquitectura y sistemas distribuidos.",highlights:["Fechas exactas: Pendiente por completar"],technologies:[],
  }],
};
