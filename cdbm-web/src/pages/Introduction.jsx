import Section from '../components/Section';

const Introduction = () => {
  return (
    <>
      <Section title="Introduction" id="introduction">
        <p>
          The ability to monitor and predict driver behavior is crucial for enhancing road safety, especially for vulnerable groups 
          such as deaf drivers. Existing systems primarily focus on auditory feedback for detecting hazards and unsafe driving behavior, 
          which is not suitable for the deaf. This research aims to bridge this gap by developing an IoT-enabled system that utilizes 
          multimodal data from wearable sensors and onboard cameras to continuously monitor both the driver's actions and the surrounding 
          environment.
        </p>
        <p>
          The primary objective of this research is to build an intelligent system capable of detecting and classifying driver behaviors 
          (e.g., acceleration, lane-keeping, and braking) using advanced deep learning techniques.
        </p>
        
        <h3>Scope of the Study</h3>
        <ul>
          <li>Implementing a driver behavior monitoring system based on accelerometer and gyroscope data.</li>
          <li>Applying 3D CNNs for visual data analysis to monitor facial movement and vehicle movement tracking.</li>
          <li>Integrating a LSTM model for analyzing temporal sensor data and detecting driving patterns.</li>
        </ul>
      </Section>
    </>
  );
};

export default Introduction;