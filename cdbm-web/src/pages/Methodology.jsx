import Section from '../components/Section';

const Methodology = () => {
  return (
    <>
      <Section title="Methodology" id="methodology">
        <h3>Datasets</h3>
        <p>
          The dataset used for this research includes accelerometer (X, Y, Z axes in meters per second squared) and gyroscope 
          (X, Y, Z axes in degrees per second) data collected from MPU6050 sensors mounted on a Raspberry Pi 3 Model B. The data 
          corresponds to three different drivers (aged 27, 28, and 37) driving various vehicles (Ford Fiesta 1.4, Ford Fiesta 1.25, 
          and Hyundai i20) with a sampling rate of 2 samples per second. Four key behaviors were labeled: acceleration (Class 1), 
          right turn (Class 2), left turn (Class 3), and braking (Class 4).
        </p>
        <p>
          Additionally, the HRI Driving Dataset (HDD) was used for training CNN models. HDD includes 104 hours of real human driving 
          data collected in the San Francisco Bay Area using an instrumented vehicle equipped with various sensors. It contains CAN 
          bus sensor values and front-facing camera footage, which was used in this research to train the CNN models for facial 
          expression analysis and lane-keeping detection.
        </p>
        
        <h3>Sensor Data Preprocessing</h3>
        <ul>
          <li>The accelerometer and gyroscope data were normalized, and a sliding window approach with a window size of 14 seconds was applied to segment the data into manageable time windows.</li>
          <li>Each data window contained 28 samples, each with 6 features (3 accelerometer axes and 3 gyroscope axes).</li>
        </ul>
        
        <h3>Model Architecture</h3>
        <div className="model-architecture">
          <div className="model-card">
            <h4>3D CNN</h4>
            <p>Used to process video data (capturing facial movements, eye expressions, and lane-keeping behavior) to detect signs of fatigue, distraction, or lane departures. A 3D CNN was chosen to capture the spatial and temporal features from consecutive frames in the video.</p>
          </div>
          <div className="model-card">
            <h4>LSTM</h4>
            <p>Applied to model the temporal dependencies in the sensor data to recognize behavior patterns over time, such as acceleration, braking, and lane-keeping. The LSTM model was designed to process sequences of sensor data to classify driving behaviors at each time step.</p>
          </div>
        </div>
        
        <h3>Fusion Layer</h3>
        <p>
          A fusion layer was employed to integrate the outputs of the 3D CNN and LSTM models. The model used late fusion, where high-level 
          features from each modality were concatenated and passed through a final fully connected layer for behavior classification.
        </p>
        
        <h3>Training and Evaluation</h3>
        <p>
          The models were trained using a train-test split with a cross-validation strategy to avoid overfitting. Accuracy, precision, 
          recall, and F1 score were used to evaluate model performance, with a focus on handling the class imbalance and improving 
          classification accuracy across all driver behaviors.
        </p>
      </Section>
    </>
  );
};

export default Methodology;