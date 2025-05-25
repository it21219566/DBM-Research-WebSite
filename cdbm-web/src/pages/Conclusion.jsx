import Section from '../components/Section';

const Conclusion = () => {
  return (
    <>
      <Section title="Conclusion and Future Work" id="conclusion">
        <h3>Conclusion</h3>
        <p>
          This research presents a comprehensive multimodal deep learning system that successfully classifies driver behaviors based on 
          accelerometer, gyroscope, and video data. By using 3D CNNs for visual data and LSTMs for sensor data, the system provides 
          accurate real-time predictions of critical driver behaviors, enhancing road safety for deaf drivers.
        </p>
        
        <h3>Limitations</h3>
        <ul>
          <li>The study relied on limited datasets from three drivers, which may not fully represent the diversity of driving styles and conditions.</li>
          <li>Real-time implementation on a Raspberry Pi is computationally challenging, requiring model optimization for efficient deployment.</li>
        </ul>
        
        <h3>Future Work</h3>
        <ul>
          <li><strong>Expanding the dataset:</strong> Including more drivers, vehicles, and diverse environmental conditions for better generalization.</li>
          <li><strong>Real-time deployment:</strong> Implementing model optimization techniques such as pruning and quantization to deploy the system efficiently on embedded devices like Raspberry Pi.</li>
          <li><strong>Multimodal Alert System:</strong> Developing a feedback system to alert the driver (visually or through vibration) in case of unsafe driving behavior, specifically designed for deaf drivers.</li>
        </ul>
      </Section>
    </>
  );
};

export default Conclusion;