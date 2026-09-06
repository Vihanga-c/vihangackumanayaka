import oceanWavesImg from "../assets/projects/ocean-waves.jpg";
import micromouseImg from "../assets/projects/micromouse.jpg";
import galleryCadImg from "../assets/projects/gallery-cad.jpg";
import galleryPcbImg from "../assets/projects/gallery-pcb.jpg";
import galleryLabImg from "../assets/projects/gallery-lab.jpg";
import galleryTelemetryImg from "../assets/projects/gallery-telemetry.jpg";
import galleryFieldImg from "../assets/projects/gallery-field.jpg";

import argoImg from "../assets/projects/argo/argo-1.jpeg";

import diyakawaImg1 from "../assets/projects/diyakawa/diyakawa-1.jpeg";
import diyakawaImg2 from "../assets/projects/diyakawa/diyakawa-2.jpeg";
import diyakawaImg3 from "../assets/projects/diyakawa/diyakawa-3.jpeg";
import diyakawaImg4 from "../assets/projects/diyakawa/diyakawa-4.jpeg";
import diyakawaImg5 from "../assets/projects/diyakawa/diyakawa-5.jpeg";
import diyakawaImg6 from "../assets/projects/diyakawa/diyakawa-6.jpeg";
import diyakawaImg7 from "../assets/projects/diyakawa/diyakawa-7.jpeg";
import diyakawaImg8 from "../assets/projects/diyakawa/diyakawa-8.jpeg";
import diyakawaVideo1 from "../assets/projects/diyakawa/diyakawa-demo-1.mp4";
import diyakawaVideo2 from "../assets/projects/diyakawa/diyakawa-demo-2.mp4";

import instrumentationImg from "../assets/projects/instrumentation/instrumentation-1.jpeg";

import manufacturingImg1 from "../assets/projects/manufacturing/manufacturing-1.jpeg";
import manufacturingImg2 from "../assets/projects/manufacturing/manufacturing-2.jpeg";
import manufacturingImg3 from "../assets/projects/manufacturing/manufacturing-3.jpeg";

import scaraImg1 from "../assets/projects/scara/scara-1.jpeg";
import scaraImg2 from "../assets/projects/scara/scara-2.jpeg";
import scaraImg3 from "../assets/projects/scara/scara-3.jpeg";
import scaraVideo from "../assets/projects/scara/scara-demo.mp4";

export interface ProjectGalleryItem {
  src: string;
  caption: string;
  type?: "image" | "video";
}

export interface ProjectSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  accentColor: string;
  gradientBackdrop: string;
  tags: string[];
  gallery: ProjectGalleryItem[];
  sections: ProjectSection[];
}

export const PROJECTS: Project[] = [
  {
    id: "otter-robot",
    title: "Otter Body Mechanism Mimicking Robot",
    category: "Mechatronic System Design",
    shortDesc:
      "An aquatic robot inspired by an otter's swimming biomechanics — it generates forward thrust through body undulation and limb paddling, engineered through linkage design, multibody dynamics, and hydrodynamic analysis.",
    image: oceanWavesImg,
    accentColor: "#00CEC9",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(0, 206, 201, 0.42) 0%, rgba(8, 70, 75, 0.75) 45%, rgba(4, 15, 20, 0.96) 100%)",
    tags: [
      "Mechanical Design",
      "Mechatronic System Design",
      "Linkage Mechanism Design",
      "Bio-inspired Robotics",
      "Multibody Dynamics",
      "Hydrodynamic Analysis",
      "Control Systems",
      "Electronic Circuit Design",
    ],
    gallery: [
      {
        src: oceanWavesImg,
        caption: "Aquatic robot concept inspired by the swimming biomechanics of an otter",
      },
      {
        src: galleryCadImg,
        caption: "Linkage mechanism configurations explored for the paddling limb",
      },
      {
        src: galleryLabImg,
        caption: "Mechanism prototyping and motion-characteristic evaluation",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "The **ME3261 – Mechatronic System Design Project** is a three-semester engineering project focused on developing a complete mechatronic system for industrial application, supported by a structured design process, analysis, and technical justification.",
          "My proposed system is an **aquatic robot inspired by the swimming biomechanics of an otter**. Rather than relying solely on conventional propellers, the robot is designed to generate forward thrust through a combination of **body undulation and limb paddling**. The project explores how the distinctive morphology and swimming motion of an otter can be translated into an engineered robotic system through **mechanical linkage design, multibody dynamics, hydrodynamic analysis, control systems, and electronic circuit design**.",
          "Computer vision is also planned for integration into the system to enable capabilities such as **underwater navigation and object detection**, with the long-term objective of developing a robot capable of autonomous operation in aquatic environments.",
        ],
      },
      {
        heading: "Current Status",
        paragraphs: [
          "The current focus of the project is the development and evaluation of the **otter-inspired limb mechanism**. The objective is not only to generate effective thrust during the paddling stroke, but also to minimize drag during the recovery stroke.",
          "Multiple linkage configurations are currently being explored to determine which mechanism can provide the most effective and efficient paddling motion. This work involves evaluating different mechanical architectures and their motion characteristics as part of the iterative design process.",
        ],
      },
    ],
  },
  {
    id: "micromouse-argo",
    title: "Micromouse Robot — Argo",
    category: "High-Speed Autonomous Robotics",
    shortDesc:
      "Argo is an autonomous Micromouse robot that explores unknown mazes, determines the fastest route to the centre, and sprints through it at high speed.",
    image: argoImg,
    accentColor: "#FF6B6B",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(255, 107, 107, 0.42) 0%, rgba(85, 25, 45, 0.75) 45%, rgba(18, 6, 15, 0.96) 100%)",
    tags: [
      "Robotics",
      "Autonomous Navigation",
      "Embedded Systems",
      "ESP32 Programming",
      "Sensor Integration",
      "Time-of-Flight Sensing",
      "IMU Integration",
      "Sensor Fusion",
      "Extended Kalman Filter",
      "Motor Control",
      "SLAM",
      "CAD Design",
    ],
    gallery: [
      {
        src: argoImg,
        caption: "Argo — assembled micromouse robot platform",
      },
      {
        src: micromouseImg,
        caption: "Compact chassis integrating sensors, IMU, and drive motors",
      },
      {
        src: galleryPcbImg,
        caption: "Embedded electronics and motor-drive hardware",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "**Argo** is an autonomous Micromouse robot designed to explore unknown mazes, determine an efficient route to the destination, and ultimately traverse the calculated path at high speed.",
          "The project combines **embedded programming, sensor integration, localization, sensor fusion, motor control, autonomous navigation, and mechanical design** into a compact robotic platform. Argo is designed to make decisions based on its sensor observations while continuously maintaining an estimate of its position within the maze.",
        ],
      },
      {
        heading: "Control Architecture",
        paragraphs: [
          "Argo uses **four Time-of-Flight (ToF) sensors and an IMU** for environmental perception and localization. Motor encoders provide feedback on the distance travelled by the robot. The IMU and ToF measurements are fused using an **Extended Kalman Filter (EKF)** to obtain a more reliable estimate of the robot's position while mitigating the limitations of individual sensors.",
          "An **ESP32** serves as the main processing and control unit, handling sensor acquisition, state estimation, navigation logic, and motor control. The robot is powered by two 3.7 V, 500 mAh LiPo pouch cells arranged in a **2S1P configuration**.",
        ],
      },
      {
        heading: "Maze Solving Algorithm",
        paragraphs: [
          "Argo uses **Trémaux's algorithm** to explore the maze and determine a path to the centre. Once the maze has been explored and the optimal route has been established, a **Fast Run** is performed to traverse the calculated path in the shortest possible time.",
        ],
      },
      {
        heading: "Current Status",
        paragraphs: [
          "The sensing and actuation systems have been integrated with the ESP32, and the individual sensors and motors have been tested for correct operation. Current development is focused on **sensor fusion, autonomous exploration, and navigation algorithms**, enabling Argo to maintain an understanding of the paths it has already explored while navigating the maze.",
        ],
      },
    ],
  },
  {
    id: "diyakawa",
    title: "DIYAKAWA 3.0",
    category: "Autonomous Underwater Robotics",
    shortDesc:
      "A University of Moratuwa autonomous underwater vehicle with eight BLDC thrusters and IMU-based orientation and depth control — shortlisted to compete at SAUVC 2026.",
    image: diyakawaImg4,
    accentColor: "#4FACFE",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(79, 172, 254, 0.42) 0%, rgba(20, 60, 110, 0.75) 45%, rgba(6, 14, 28, 0.96) 100%)",
    tags: [
      "Underwater Robotics",
      "Robotic System Design",
      "Mechanical Structure Design",
      "Waterproofing",
      "CAD Modelling",
      "Embedded Systems",
      "BLDC Motor Control",
      "Bidirectional ESCs",
      "Power Electronics",
      "Electronic Circuit Design",
      "Electrical Safety",
      "Sensor Integration",
      "Depth Sensing",
      "IMU-Based Orientation",
      "System Integration",
    ],
    gallery: [
      {
        src: diyakawaVideo1,
        caption: "Underwater test footage of DIYAKAWA 3.0",
        type: "video",
      },
      {
        src: diyakawaImg4,
        caption: "DIYAKAWA 3.0 — the SAUVC 2026 autonomous underwater vehicle",
      },
      {
        src: diyakawaVideo2,
        caption: "Propulsion and manoeuvring trials",
        type: "video",
      },
      {
        src: diyakawaImg1,
        caption: "Vehicle structure during assembly",
      },
      {
        src: diyakawaImg2,
        caption: "Structural frame and component integration",
      },
      {
        src: diyakawaImg3,
        caption: "Watertight enclosures and thruster installation",
      },
      {
        src: diyakawaImg5,
        caption: "Control electronics and power system",
      },
      {
        src: diyakawaImg6,
        caption: "Testing and validation session",
      },
      {
        src: diyakawaImg7,
        caption: "Deployment preparation",
      },
      {
        src: diyakawaImg8,
        caption: "Team testing at the water site",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "**DIYAKAWA 3.0** is an autonomous underwater vehicle developed by the University of Moratuwa as a continuation of the DIYAKAWA project series for participation in the **Singapore Autonomous Underwater Vehicle Challenge (SAUVC)**. The completed system was **shortlisted among the teams selected to compete in SAUVC 2026**, representing a significant multidisciplinary engineering effort involving mechanical, electronic, and control-system development.",
        ],
      },
      {
        heading: "Control Architecture",
        paragraphs: [
          "DIYAKAWA 3.0 is equipped with **eight BLDC motors** to provide vertical, horizontal, and rotational motion, enabling the vehicle to manoeuvre underwater in multiple degrees of freedom.",
          "An **IMU and pressure sensor** are used for orientation estimation and depth measurement, while an **ESP32** serves as the main microcontroller. The control system enables the vehicle to descend to specified depths and follow predefined trajectories while maintaining stable underwater motion.",
        ],
      },
      {
        heading: "Body Structure and Waterproofing",
        paragraphs: [
          "A rigid structural frame was designed using CAD modelling software and manufactured using **aluminium sheets** to achieve the required strength and durability while allowing the various components to be securely fastened.",
          "The vehicle's control electronics, including the MCU and sensors, are housed within a dedicated **water-tight enclosure**, while the battery and other high-current components are isolated within a separate enclosure. Waterproof aviation connectors are used to interface the internal electronics with the external BLDC motors.",
          "The motors are housed in **3D-printed structures** designed to simplify installation and guide water flow around the propellers. A dedicated emergency kill switch was also incorporated to immediately terminate operation and power to the system and initiate resurfacing in the event of an emergency.",
        ],
      },
      {
        heading: "My Contribution",
        paragraphs: [
          "My primary mechanical contribution focused on **waterproofing and protecting the vehicle's 3D-printed structures and electronic enclosures**. I investigated methods of preventing water ingress and applied **epoxy coatings** to the 3D-printed components, together with weather-resistant adhesive protection. Aviation connector interfaces were additionally reinforced and sealed using gasket sealants.",
          "Although minor seepage remained within some 3D-printed components, these measures significantly reduced water-related damage and successfully prevented water leakage into the electronic enclosures.",
          "I also contributed to the **selection of the vehicle's control approach and the development of its electronic circuitry**. Since the eight motors were driven using bidirectional ESCs and the total motor system could demand approximately **20 A at peak operation**, electrical protection and power management were important considerations. My work included incorporating fuses and relays, selecting suitable step-down converters for the required voltage levels, and integrating a reed-switch-and-magnet-based emergency kill switch.",
          "In addition, I contributed to the development of the **BLDC motor control logic using PWM signals**, including the balancing of individual motor speed variations to improve the stability of the vehicle during underwater operation.",
          "This project provided hands-on experience in **autonomous robotics, underwater system design, waterproofing, power electronics, embedded control, BLDC motor control, electrical safety, and multidisciplinary system integration**.",
        ],
      },
    ],
  },
  {
    id: "bike-instrumentation",
    title: "Bicycle & Rider Data Gathering System",
    category: "Instrumentation & IoT",
    shortDesc:
      "An instrumentation and IoT system that collects, processes, and presents bicycle and rider performance data — using an Extended Kalman Filter to counter sensor drift, offset, and noise.",
    image: instrumentationImg,
    accentColor: "#55EFC4",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(85, 239, 196, 0.4) 0%, rgba(12, 85, 70, 0.75) 45%, rgba(4, 18, 16, 0.96) 100%)",
    tags: [
      "Instrumentation Systems",
      "Sensor Integration",
      "Sensor Fusion",
      "Extended Kalman Filter",
      "State Estimation",
      "Embedded Systems",
      "Measurement Systems",
      "Error Mitigation",
      "IoT",
      "Data Acquisition",
    ],
    gallery: [
      {
        src: instrumentationImg,
        caption: "Bicycle and rider instrumentation setup",
      },
      {
        src: galleryLabImg,
        caption: "Sensor calibration and measurement-system validation",
      },
      {
        src: galleryTelemetryImg,
        caption: "Processed ride telemetry consolidated in the web application",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This project focused on the design and implementation of an **instrumentation and IoT-based system for collecting, processing, and presenting data associated with bicycle and rider performance**.",
          "The system integrates measurements from distributed sensors and applies signal-processing and state-estimation techniques to reduce the effects of inherent sensor errors such as **drift, offset, and noise**. An **Extended Kalman Filter (EKF)** was implemented as a nonlinear state observer, while IoT technologies were used to connect sensors distributed across the system and consolidate processed information into a web application.",
          "The final system was designed to collect key parameters associated with a bicycle ride, including **vehicle speed, road inclination, rider heart rate, and pedal force**.",
        ],
      },
      {
        heading: "My Contribution",
        paragraphs: [
          "My primary contribution was the integration of an **MPU6050 accelerometer and gyroscope** into the measurement system to determine the bicycle's inclination.",
          "The accelerometer and gyroscope exhibit different limitations: the gyroscope is susceptible to accumulated drift, while accelerometer measurements can be affected by noise and external motion. I implemented an **Extended Kalman Filter to fuse measurements from both sensors**, allowing these limitations to be mitigated and producing more stable estimates of the bicycle's inclination along its longitudinal and horizontal axes.",
          "Through this work, I gained practical experience in **inertial sensing, sensor fusion, nonlinear state estimation, embedded system integration, and measurement-error mitigation**.",
        ],
      },
    ],
  },
  {
    id: "scara-vision",
    title: "Computer Vision-Powered Pick-and-Place Robot",
    category: "Robotics & Computer Vision",
    shortDesc:
      "A SCARA robotic system that identifies objects by colour and shape with a YOLOv8 object-detection model, then autonomously picks them up and places them in a designated location.",
    image: scaraImg1,
    accentColor: "#00B894",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(0, 184, 148, 0.4) 0%, rgba(12, 70, 60, 0.75) 45%, rgba(4, 18, 17, 0.96) 100%)",
    tags: [
      "Robotics",
      "Computer Vision",
      "YOLOv8",
      "Object Detection",
      "Image Processing",
      "Raspberry Pi",
      "Embedded Systems",
      "Robotic Manipulation",
      "Automated Pick-and-Place",
    ],
    gallery: [
      {
        src: scaraImg1,
        caption: "SCARA pick-and-place robot with integrated camera vision",
      },
      {
        src: scaraVideo,
        caption: "Live autonomous pick-and-place demonstration",
        type: "video",
      },
      {
        src: scaraImg2,
        caption: "Camera and object-detection setup over the turntable",
      },
      {
        src: scaraImg3,
        caption: "Gripper and manipulation assembly",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This project involved the development of a **SCARA robotic system capable of autonomously identifying and manipulating objects based on their colour and shape**.",
          "A camera module was integrated with the robot to provide computer vision capabilities. When a user specifies a target object's colour and shape through a web application, the system identifies the corresponding object on a turntable, determines its position, and commands the SCARA robot to pick it up and place it in the designated location.",
          "The project brought together **robotics, computer vision, machine learning, embedded systems, image processing, and robotic manipulation** into a single automated system.",
        ],
      },
      {
        heading: "My Contribution",
        paragraphs: [
          "I worked with a teammate on developing and training a **YOLOv8 object-detection model** to identify both the colours and shapes of the objects placed on the turntable.",
          "Following a user request from the web application, the Raspberry Pi processes the camera input using the trained model and determines the target object's location in image coordinates. This information is then transformed into a corresponding **real-world position relative to the SCARA robot's coordinate system**, providing the control system with the positional information required for object manipulation.",
          "This project gave me practical experience in **computer vision, machine learning model training, coordinate transformation, robotic perception, Raspberry Pi-based processing, and the integration of vision systems with robotic manipulation**.",
        ],
      },
    ],
  },
  {
    id: "factory-flow",
    title: "Factory Floor Optimization for Production Flow",
    category: "Industrial Engineering & Operations",
    shortDesc:
      "An industrial study at the Ferentino Tire Manufacturing Plant analysing production flow and using Tecnomatix to simulate a proposed gantry-based material handling solution.",
    image: galleryFieldImg,
    accentColor: "#FDCB6E",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(253, 203, 110, 0.4) 0%, rgba(120, 78, 22, 0.75) 45%, rgba(24, 16, 8, 0.96) 100%)",
    tags: [
      "Industrial Engineering",
      "Production Flow Analysis",
      "Process Optimization",
      "Factory Layout Analysis",
      "Material Handling Systems",
      "Workflow Analysis",
      "Tecnomatix",
      "Industrial Data Collection",
    ],
    gallery: [
      {
        src: galleryFieldImg,
        caption: "On-site study at the Ferentino Tire Manufacturing Plant",
      },
      {
        src: galleryCadImg,
        caption: "Tecnomatix simulation of the production workflow",
      },
      {
        src: galleryTelemetryImg,
        caption: "Factory-floor data collection and workflow analysis",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This project focused on analysing and improving the **manufacturing workflow and operational efficiency of an industrial production environment**. As part of the project, our team conducted an industrial study at the **Ferentino Tire Manufacturing Plant in Wagawatta, Sri Lanka**, where we examined existing production practices, identified process limitations, and investigated opportunities for improvement.",
          "The study considered issues affecting production flow, equipment availability, material movement, and workforce efficiency, with the aim of developing practical engineering interventions that could improve the overall production process.",
        ],
      },
      {
        heading: "Current Status",
        paragraphs: [
          "Following the initial plant visit and discussions with personnel in the Solid Tire production section, several key areas for improvement were identified, including:",
        ],
        bullets: [
          "The absence of a suitable **gantry system for transferring heavy tyres** between manufacturing stages.",
          "Limited implementation of **preventive maintenance**, contributing to potential machinery downtime.",
          "A shortage of sufficiently skilled personnel for certain operations.",
        ],
      },
      {
        heading: "Current Stage of the Project",
        paragraphs: [
          "Based on further discussions and analysis, our team has focused on developing a **gantry-based material handling solution** to improve the movement of tyres throughout the production process.",
          "The current stage of the project involves collecting and analysing factory-floor data and using **Tecnomatix** to simulate the existing production workflow. This baseline simulation will subsequently be used to evaluate the effect of introducing the proposed gantry system and compare the resulting production flow with the current process.",
          "This project has provided experience in **industrial engineering analysis, production-flow modelling, process optimization, factory-layout analysis, simulation, and the development of engineering solutions based on real industrial constraints**.",
        ],
      },
    ],
  },
  {
    id: "ir-cooker-reverse",
    title: "Reverse Engineering of an Infrared Cooker",
    category: "Reverse Engineering & Materials",
    shortDesc:
      "A reverse-engineering and manufacturing-process analysis of an infrared cooker — investigating how its major components are made and why specific materials and processes are chosen.",
    image: galleryLabImg,
    accentColor: "#6C5CE7",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(108, 92, 231, 0.45) 0%, rgba(40, 25, 90, 0.75) 45%, rgba(10, 6, 24, 0.96) 100%)",
    tags: [
      "Reverse Engineering",
      "Materials Characterization",
      "Manufacturing Process Analysis",
      "Technical Research",
      "Refractory Materials",
      "CAD Modelling",
      "Product Analysis",
    ],
    gallery: [
      {
        src: galleryLabImg,
        caption: "Component inspection and materials investigation",
      },
      {
        src: galleryCadImg,
        caption: "CAD model developed from the reverse-engineering process",
      },
      {
        src: galleryPcbImg,
        caption: "Electrical components of the infrared cooker",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This project involved the **reverse engineering and manufacturing-process analysis of an infrared cooker**, with particular attention given to understanding how its major components are manufactured and why specific materials and manufacturing processes are selected.",
          "The components investigated included the **glass top, heating coil, ceramic heating-coil housing, plastic outer casing, and metal casing**. For each component, the study considered the material used, the manufacturing process involved, and potential alternative materials or manufacturing methods that could provide improved performance.",
        ],
      },
      {
        heading: "My Contribution",
        paragraphs: [
          "My primary focus was the **ceramic housing surrounding the heating coil**. I investigated the material and manufacturing process by studying information provided by IR cooker manufacturers and reviewing additional technical sources discussing similar applications.",
          "Based on this investigation, I identified the housing material as a **vermiculite-based refractory composite** and the manufacturing process as **ceramic powder pressing**.",
          "In addition to the materials and manufacturing analysis, I developed a **CAD model of the component**, translating the physical component and the information obtained during the reverse-engineering process into a digital representation.",
          "The project strengthened my experience in **reverse engineering, materials research, manufacturing-process analysis, technical research, and CAD modelling**.",
        ],
      },
    ],
  },
  {
    id: "movie-projector",
    title: "Vintage Movie Projector Replica",
    category: "Manufacturing & Fabrication",
    shortDesc:
      "A hand-built replica of a vintage movie projector, fabricated through woodworking, sheet-metal forming, welding, machining, and mechanical assembly.",
    image: manufacturingImg1,
    accentColor: "#E17055",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(225, 112, 85, 0.45) 0%, rgba(100, 40, 22, 0.75) 45%, rgba(20, 8, 8, 0.96) 100%)",
    tags: [
      "Manufacturing Engineering",
      "Mechanical Fabrication",
      "Design for Manufacturing",
      "Material Selection",
      "Woodworking",
      "Sheet-Metal Forming",
      "Metal Welding",
      "Machining",
      "Metal Lathe Operations",
      "Mechanical Assembly",
      "Fastening & Joining",
      "Product Development",
    ],
    gallery: [
      {
        src: manufacturingImg1,
        caption: "Hand-built replica of the vintage movie projector",
      },
      {
        src: manufacturingImg2,
        caption: "Fabricated components and assembly details",
      },
      {
        src: manufacturingImg3,
        caption: "Wooden housing and metal reel assembly",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This project was undertaken to develop practical familiarity with a range of **traditional manufacturing and fabrication techniques**, including woodworking, sheet-metal forming, smith forging, metal welding, fitting, and machining using a metal lathe.",
          "Our team designed and fabricated a **replica of a vintage movie projector**, requiring the integration of components manufactured from different materials and through different processes. Studying existing vintage projector designs, extracting appropriate dimensions, and modifying design features to suit our requirements were important parts of the development process.",
        ],
      },
      {
        heading: "Design and Manufacturing",
        paragraphs: [
          "Different materials and manufacturing methods were selected according to the functional and structural requirements of each component:",
        ],
        bullets: [
          "**Front metal cowling:** Aluminium sheet",
          "**Projector component housing and door:** Wood",
          "**Movie reel:** Wooden cylinders and aluminium sheet",
          "**Movie reel holders:** Steel bars and steel plate",
          "**Projector stand:** Steel bars",
        ],
      },
      {
        heading: "Assembly",
        paragraphs: [
          "The aluminium components were formed into the required geometries using **sheet-metal forming**, while the steel structural members were joined through **metal welding**. The wooden and metal components were assembled using a combination of **screw fasteners and adhesives**.",
          "The project provided hands-on experience in **design for manufacture, material selection, fabrication, machining, sheet-metal work, welding, woodworking, mechanical assembly, and translating a conceptual design into a physical product**.",
        ],
      },
    ],
  },
];