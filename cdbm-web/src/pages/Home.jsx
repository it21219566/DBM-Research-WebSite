import Section from '../components/Section';

const Home = () => {
  return (
    <>
      <Section title="Abstract" id="abstract">
        <p>
          This research explores the development of a comprehensive system for driver behavior monitoring and hazard detection 
          specifically tailored for deaf drivers using multimodal deep learning techniques. The proposed system integrates 
          accelerometer and gyroscope sensor data with video data to classify four key driver behaviors: acceleration, 
          right turn, left turn, and braking.
        </p>
        <p>
          A 3D Convolutional Neural Network (CNN) is used to process visual data (for analyzing facial expressions and lane keeping), 
          while a Long Short-Term Memory (LSTM) network handles the temporal analysis of sensor data. The paper presents the methodology, 
          experimental setup, results, and the potential for real-time applications in improving the safety of deaf drivers.
        </p>
      </Section>
    </>
  );
};

export default Home;