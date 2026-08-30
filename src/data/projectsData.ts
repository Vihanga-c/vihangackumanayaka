import mountainVistaImg from "../assets/projects/mountain-vista.jpg";
import oceanWavesImg from "../assets/projects/ocean-waves.jpg";
import forestPathImg from "../assets/projects/forest-path.jpg";
import micromouseImg from "../assets/projects/micromouse.jpg";
import exoskeletonImg from "../assets/projects/exoskeleton.jpg";
import roboticArmImg from "../assets/projects/robotic-arm.jpg";
import bldcControllerImg from "../assets/projects/bldc-controller.jpg";
import emgProstheticImg from "../assets/projects/emg-prosthetic.jpg";

import galleryCadImg from "../assets/projects/gallery-cad.jpg";
import galleryPcbImg from "../assets/projects/gallery-pcb.jpg";
import galleryLabImg from "../assets/projects/gallery-lab.jpg";
import galleryTelemetryImg from "../assets/projects/gallery-telemetry.jpg";
import galleryFieldImg from "../assets/projects/gallery-field.jpg";

export interface ProjectDetailSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  accentColor: string;
  gradientBackdrop: string;
  gallery: { src: string; caption: string }[];
  overview: string;
  timeline: string;
  role: string;
  tags: string[];
  specs: ProjectDetailSpec[];
  architecture: string[];
  results: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "mountain-vista",
    title: "Mountain Vista",
    category: "Autonomous Environmental Telemetry",
    shortDesc:
      "Breathtaking views from the summit, where clouds dance below and peaks stretch endlessly into the horizon. Experience the majesty of nature's grand architecture.",
    image: mountainVistaImg,
    accentColor: "#E17055",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(225, 112, 85, 0.45) 0%, rgba(77, 34, 18, 0.75) 45%, rgba(14, 8, 12, 0.96) 100%)",
    gallery: [
      {
        src: mountainVistaImg,
        caption: "High-altitude remote sensor node deployed on rugged mountain ridge",
      },
      {
        src: galleryFieldImg,
        caption: "Solar-harvesting energy unit and environmental enclosure",
      },
      {
        src: galleryTelemetryImg,
        caption: "Real-time atmospheric telemetry and mesh network dashboard",
      },
    ],
    overview:
      "A ruggedized, autonomous meteorological sensor station designed for continuous remote data acquisition in extreme alpine environments. The platform integrates long-range LoRa satellite uplink, solar MPPT charging, and multi-sensor atmospheric tracking with over 99.8% uptime.",
    timeline: "2025 – 2026",
    role: "Lead Hardware & Embedded Systems Engineer",
    tags: ["Embedded C++", "LoRaWAN", "MPPT Solar", "Low-Power PCB", "Telemetry"],
    specs: [
      { label: "Microcontroller", value: "STM32L4+ Ultra-Low-Power ARM Cortex-M4" },
      { label: "Connectivity", value: "Long-Range LoRa (868/915 MHz) + Satellite Transceiver" },
      { label: "Power System", value: "Custom 15W Solar MPPT with LiFePO4 Battery Management" },
      { label: "Operating Temp", value: "-40°C to +65°C Weather-Sealed Enclosure (IP68)" },
    ],
    architecture: [
      "Custom multi-layer PCB engineered for sub-15uA deep sleep power consumption.",
      "Deterministic event-driven RTOS architecture with fail-safe memory logging in SPI Flash.",
      "Dynamic transmission power scaling based on RSSI and link budget optimization.",
    ],
    results: [
      "Successfully streamed 12,000+ telemetry packets over 45km non-line-of-sight terrain.",
      "Maintained uninterrupted operation through sub-zero snowstorm conditions for 180+ consecutive days.",
    ],
  },
  {
    id: "ocean-waves",
    title: "Ocean Waves",
    category: "Unmanned Surface Marine Vessel",
    shortDesc:
      "Dynamic hydrodynamic surface vessel navigating coastal tidal currents and collecting real-time oceanographic bathymetry and water quality data.",
    image: oceanWavesImg,
    accentColor: "#74B9FF",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(116, 185, 255, 0.42) 0%, rgba(24, 60, 110, 0.72) 48%, rgba(8, 14, 28, 0.96) 100%)",
    gallery: [
      {
        src: oceanWavesImg,
        caption: "Wave-piercing autonomous twin-hull vessel on open water trial",
      },
      {
        src: galleryCadImg,
        caption: "CFD hydrodynamic hull modeling and internal ballast distribution",
      },
      {
        src: galleryTelemetryImg,
        caption: "Bathymetric depth mapping and autonomous waypoint mission planner",
      },
    ],
    overview:
      "An autonomous catamaran surface vehicle engineered for maritime environmental monitoring, acoustic depth sounding, and shoreline mapping. Features GPS-waypoint tracking, obstacle avoidance via radar-lidar fusion, and water-tight modular sensor bays.",
    timeline: "2025",
    role: "Autonomous Systems & Mechatronics Lead",
    tags: ["ROS 2", "Hydrodynamics", "GPS Navigation", "Sonar Bathymetry", "BLDC Propulsion"],
    specs: [
      { label: "Hull Design", value: "Carbon Fiber Wave-Piercing Catamaran (1.4m LOA)" },
      { label: "Autopilot", value: "Dual RTK-GPS + 9-DOF Marine IMU with Extended Kalman Filter" },
      { label: "Propulsion", value: "Dual IP68 Brushless Thrusters with Vector Steering" },
      { label: "Mission Endurance", value: "8 Hours continuous autonomous surveying at 4 knots" },
    ],
    architecture: [
      "Dual-microcontroller safety supervisor coupled with NVIDIA Jetson edge compute for obstacle perception.",
      "Real-time sensor fusion of multi-beam echo sounder and water salinity/temperature probes.",
      "Autonomous return-to-home protocol triggered on geofence violation or low battery.",
    ],
    results: [
      "Mapped 4.2 square kilometers of coastal shoreline with centimeter-level precision.",
      "Achieved stable navigation through Beaufort Scale 4 sea states with active roll dampening.",
    ],
  },
  {
    id: "forest-path",
    title: "Forest Path",
    category: "Bio-Acoustic LiDAR Drone",
    shortDesc:
      "Canopy-penetrating aerial drone platform utilizing solid-state LiDAR sensors and multi-spectral computer vision for dense forest environmental analytics.",
    image: forestPathImg,
    accentColor: "#00CEC9",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(0, 206, 201, 0.42) 0%, rgba(8, 70, 75, 0.75) 45%, rgba(4, 15, 20, 0.96) 100%)",
    gallery: [
      {
        src: forestPathImg,
        caption: "Deep canopy aerial survey exploring bio-density and tree health",
      },
      {
        src: galleryCadImg,
        caption: "Lightweight carbon quadcopter airframe and vibration-damped gimbal",
      },
      {
        src: galleryLabImg,
        caption: "Acoustic sensor calibration and ultrasonic range testing in lab",
      },
    ],
    overview:
      "A specialized multirotor UAS built for autonomous flight beneath dense forest canopies where GPS signals are degraded. Utilizes 3D solid-state LiDAR SLAM for sub-canopy obstacle navigation and bio-acoustic microphones for wildlife biodiversity tracking.",
    timeline: "2024 – 2025",
    role: "Robotics Perception & Flight Controls Engineer",
    tags: ["LiDAR SLAM", "Computer Vision", "PX4 Autopilot", "Bio-Acoustics", "Edge AI"],
    specs: [
      { label: "Flight Controller", value: "Custom PX4 FMU with Optical Flow & LiDAR Odometry" },
      { label: "Perception Sensor", value: "360° Solid-State LiDAR (50m range, 100k pts/sec)" },
      { label: "Payload", value: "Multi-Spectral 4K Camera + Bio-Acoustic Sensor Array" },
      { label: "Frame", value: "Custom 450mm Carbon Fiber Airframe with Propeller Guards" },
    ],
    architecture: [
      "GPS-denied localization leveraging Fast-LIO2 LiDAR-inertial odometry.",
      "Onboard edge AI classifier detecting avian vocalizations in real time.",
      "Dynamic 3D volumetric path planning avoiding thin branches and foliage.",
    ],
    results: [
      "Demonstrated 25+ successful sub-canopy autonomous mapping flights without human intervention.",
      "Identified and geolocated 14 distinct bird species across 80 hectares of protected reserve.",
    ],
  },
  {
    id: "micromouse-robot",
    title: "Micromouse Maze Robot",
    category: "High-Speed Autonomous Robotics",
    shortDesc:
      "High-speed autonomous maze-solving robotic vehicle featuring custom PCB architecture, dual DC micromotors, and IR sensor arrays with flood-fill pathfinding algorithms.",
    image: micromouseImg,
    accentColor: "#FF6B6B",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(255, 107, 107, 0.42) 0%, rgba(85, 25, 45, 0.75) 45%, rgba(18, 6, 15, 0.96) 100%)",
    gallery: [
      {
        src: micromouseImg,
        caption: "Custom 4-layer micromouse PCB chassis with integrated sensor ring",
      },
      {
        src: galleryPcbImg,
        caption: "High-speed surface mount assembly and precision encoder tuning",
      },
      {
        src: galleryTelemetryImg,
        caption: "Real-time maze flood-fill path computation and velocity profile plotting",
      },
    ],
    overview:
      "A competitive, ultra-compact autonomous robot designed to navigate and solve unknown 16x16 mazes in record time. Features a bespoke 4-layer PCB chassis, high-resolution magnetic wheel encoders, discrete phototransistor IR wall sensing, and diagonal continuous-turn trajectories.",
    timeline: "2024",
    role: "Hardware Designer & Algorithm Developer",
    tags: ["Embedded C", "PID Control", "Flood-Fill Algorithm", "Altium PCB", "Motion Profiles"],
    specs: [
      { label: "Core MCU", value: "STM32F405 ARM Cortex-M4 @ 168 MHz" },
      { label: "Drive System", value: "Dual Coreless DC Motors with 1:4.8 Custom Helical Gearboxes" },
      { label: "Sensing", value: "6x Custom Calibrated IR Emitter/Receiver Pairs (10 kHz pulsed)" },
      { label: "Top Speed / Accel", value: "3.8 m/s peak velocity, 9.5 m/s² longitudinal acceleration" },
    ],
    architecture: [
      "Modified Bellman-Ford / Flood-Fill solver with diagonal path smoothing.",
      "Cascaded velocity and gyro yaw-rate PID controllers running at 1 kHz closed-loop.",
      "Automated sensor calibration routine compensating for ambient light variations.",
    ],
    results: [
      "Completed 16x16 standard competition maze in under 8.4 seconds on final sprint.",
      "Zero wall collisions across 30+ tournament test runs.",
    ],
  },
  {
    id: "rehab-exoskeleton",
    title: "Rehabilitation Exoskeleton",
    category: "Biomedical & Assistive Robotics",
    shortDesc:
      "Wearable robotic upper-limb assistive exoskeleton engineered for precision torque transfer, active bio-impedance feedback, and ergonomic joint rehabilitation.",
    image: exoskeletonImg,
    accentColor: "#A29BFE",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(162, 155, 254, 0.42) 0%, rgba(55, 35, 105, 0.75) 45%, rgba(12, 8, 26, 0.96) 100%)",
    gallery: [
      {
        src: exoskeletonImg,
        caption: "Wearable motorized exoskeleton undergoing clinical motion tracking",
      },
      {
        src: galleryCadImg,
        caption: "Ergonomic 3D articulated joint geometry with quick-release harness",
      },
      {
        src: galleryLabImg,
        caption: "Biomechanical torque strain gauge testing on calibrated test rig",
      },
    ],
    overview:
      "An active assistive exoskeleton designed to facilitate physical therapy and neuromuscular rehabilitation for individuals recovering from strokes or brachial plexus injuries. Combines compliant series elastic actuators with intent-detection sensors to deliver adaptive assistance.",
    timeline: "2024 – 2025",
    role: "Mechanical Design & Biomechatronics Lead",
    tags: ["Biomechanics", "Series Elastic Actuators", "FEA Analysis", "Safety Architecture"],
    specs: [
      { label: "Degrees of Freedom", value: "4-DOF Powered (Shoulder flexion, abduction, Elbow flex/ext)" },
      { label: "Actuation", value: "Harmonic Drive Brushless Actuators with Torsion Springs" },
      { label: "Structure", value: "Anodized Aerospace 7075 Aluminum & Carbon Composite" },
      { label: "Safety Systems", value: "Triple-redundant hardware limit switches & torque thresholds" },
    ],
    architecture: [
      "Admittance control law with variable virtual stiffness adapting to patient fatigue.",
      "Custom force sensor bridges providing 0.05 Nm resolution torque feedback.",
      "Bluetooth telemetry streaming joint range-of-motion metrics to physical therapist app.",
    ],
    results: [
      "Reduced user muscular effort by up to 68% during repetitive rehabilitation exercises.",
      "Compliant joint response prevents abrupt torque spikes and ensures 100% user safety.",
    ],
  },
  {
    id: "robotic-manipulator",
    title: "6-DOF Precision Manipulator",
    category: "Industrial Robotics & Automation",
    shortDesc:
      "Six-degree-of-freedom robotic arm with sub-millimeter positional repeatability, inverse kinematics solver, and integrated computer vision payload grasping.",
    image: roboticArmImg,
    accentColor: "#00D2D3",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(0, 210, 211, 0.42) 0%, rgba(15, 65, 80, 0.75) 45%, rgba(5, 16, 22, 0.96) 100%)",
    gallery: [
      {
        src: roboticArmImg,
        caption: "Articulated 6-axis robotic manipulator during precision pick-and-place",
      },
      {
        src: galleryCadImg,
        caption: "Full CAD assembly with harmonic reduction gearboxes and internal wiring",
      },
      {
        src: galleryPcbImg,
        caption: "Distributed CAN-bus servo drive modules with 19-bit optical encoders",
      },
    ],
    overview:
      "A modular 6-DOF robotic manipulator designed for high-accuracy benchtop automation, visual inspection, and micro-assembly. Features cycloidal/harmonic drive gearboxes, internal cable management, and an analytical inverse kinematics solver running on embedded hardware.",
    timeline: "2025",
    role: "Robotics Kinematics & Embedded Control Engineer",
    tags: ["Robotics Kinematics", "CAN-Bus", "Computer Vision", "Motion Planning", "Python / C++"],
    specs: [
      { label: "Reach & Payload", value: "680 mm maximum reach with 2.5 kg nominal payload" },
      { label: "Repeatability", value: "±0.04 mm positional repeatability" },
      { label: "Joint Feedback", value: "Dual 19-bit Absolute Optical Encoders per joint" },
      { label: "Communication", value: "1 Mbps CAN FD bus with 1 kHz trajectory execution" },
    ],
    architecture: [
      "Decoupled analytical inverse kinematics with singularity avoidance and joint limit clamping.",
      "Real-time MoveIt 2 integration for dynamic collision-free path planning.",
      "RGB-D eye-in-hand camera calibration for automated 6D pose estimation of objects.",
    ],
    results: [
      "Achieved sub-second cycle time in high-precision electronic component assembly.",
      "Seamless integration with industrial PLC and ROS 2 ecosystem.",
    ],
  },
  {
    id: "bldc-controller",
    title: "High-Speed BLDC Controller",
    category: "Power Electronics & Motor Drives",
    shortDesc:
      "Custom field-oriented control (FOC) dual inverter driving high-RPM brushless DC motors with regenerative braking and sub-millisecond response latency.",
    image: bldcControllerImg,
    accentColor: "#FF7675",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(255, 118, 117, 0.42) 0%, rgba(95, 20, 30, 0.75) 45%, rgba(20, 6, 10, 0.96) 100%)",
    gallery: [
      {
        src: bldcControllerImg,
        caption: "Dual-inverter power stage with low-ESR ceramic capacitors and MOSFET bridge",
      },
      {
        src: galleryPcbImg,
        caption: "Thermal dissipation simulation and 6-layer 2oz copper PCB routing",
      },
      {
        src: galleryTelemetryImg,
        caption: "Oscilloscope capture of space vector PWM (SVPWM) and phase current waveforms",
      },
    ],
    overview:
      "A high-power-density field-oriented control (FOC) motor inverter engineered for high-RPM robotic drivetrains and UAV propulsion. Implements sensorless observer-based commutation, regenerative braking, over-current fault protection, and telemetry streaming over CAN bus.",
    timeline: "2024",
    role: "Power Electronics & Firmware Engineer",
    tags: ["FOC Motor Control", "Power MOSFETs", "Altium Designer", "DSP", "Thermal Design"],
    specs: [
      { label: "Voltage Range", value: "12V to 60V DC input (up to 14S LiPo)" },
      { label: "Continuous Current", value: "60A continuous, 120A peak with active cooling" },
      { label: "Switching Frequency", value: "40 kHz Space Vector PWM with current reconstruction" },
      { label: "Efficiency", value: "> 97.4% at nominal operating load" },
    ],
    architecture: [
      "Direct 3-shunt low-side current sensing using precision differential amplifiers.",
      "Sensorless sliding mode observer (SMO) allowing high torque startup and rapid acceleration.",
      "Hardware overvoltage, overcurrent, and thermal cutoff protection circuits.",
    ],
    results: [
      "Operated 50,000 RPM high-speed drone motors with smooth acoustic signature and zero cogging.",
      "Extensive thermal stress tests verified 50°C junction temperature rise under continuous 50A load.",
    ],
  },
  {
    id: "emg-prosthetic",
    title: "Bio-Signal EMG Prosthetic Hand",
    category: "Neural Engineering & Bionics",
    shortDesc:
      "Myoelectric multi-articulating prosthetic hand translating surface EMG muscle signals into natural finger dexterity using real-time machine learning inference.",
    image: emgProstheticImg,
    accentColor: "#6C5CE7",
    gradientBackdrop:
      "radial-gradient(circle at center, rgba(108, 92, 231, 0.45) 0%, rgba(40, 25, 90, 0.75) 45%, rgba(10, 6, 24, 0.96) 100%)",
    gallery: [
      {
        src: emgProstheticImg,
        caption: "5-finger articulated bionic hand grasping various everyday objects",
      },
      {
        src: galleryCadImg,
        caption: "Compact lead-screw drive mechanisms integrated directly inside fingers",
      },
      {
        src: galleryLabImg,
        caption: "Surface EMG electrode skin interface and signal filtering validation",
      },
    ],
    overview:
      "A lightweight, multi-articulating myoelectric prosthetic hand engineered to restore functional independence. Employs 8-channel surface electromyography (sEMG) sensor bands and an onboard neural network inference model to classify user intent into 9 distinct grip patterns in real time.",
    timeline: "2025 – 2026",
    role: "Biomedical Hardware & Embedded ML Engineer",
    tags: ["sEMG Bio-Signals", "TinyML", "3D Printing & CAD", "Embedded Systems", "Bionics"],
    specs: [
      { label: "Grip Patterns", value: "9 Active Grip Modes (Pinch, Power, Key, Tripod, Index Point, etc.)" },
      { label: "Actuation", value: "5x Micro Linear Actuators with Force Feedback Sensors" },
      { label: "Latency", value: "< 45 ms from muscle contraction to mechanical actuation" },
      { label: "Weight", value: "390 grams (including battery and onboard electronics)" },
    ],
    architecture: [
      "Analog front-end with 120 dB CMRR instrumentation amplifiers and 50/60 Hz notch filtering.",
      "Quantized Convolutional Neural Network (CNN) executing on ARM Cortex-M7 at 50 Hz.",
      "Slip-detection algorithm in fingertips automatically adjusting grip tightness.",
    ],
    results: [
      "94.2% gesture classification accuracy across 12 diverse test subjects.",
      "Enabled users to delicate items like eggs and heavy tools like power drills reliably.",
    ],
  },
];
