import Section from '../components/Section';
import ModelPerformanceChart from '../components/ModelPerformanceChart';
import TrainingChart from '../components/TrainingChart';

const Results = () => {
  return (
    <>
      <Section title="Results and Discussion" id="results">
        <h3>Performance of the Models</h3>
        <ul>
          <li>The 3D CNN models performed well in detecting facial expressions and lane-keeping behavior, with high accuracy in identifying fatigue and distraction in real-time driving scenarios.</li>
          <li>The LSTM model achieved strong results in classifying acceleration, braking, and turning behaviors, leveraging the temporal sensor data for precise action detection.</li>
        </ul>
        
        <div className="chart-container">
          <ModelPerformanceChart />
        </div>
        
        <h3>Fusion Results</h3>
        <p>
          The late fusion approach provided improved classification results, combining the strengths of both models (3D CNN for visual features 
          and LSTM for sensor data). The multimodal fusion system outperformed individual models, showing better robustness in dynamic driving 
          conditions.
        </p>
        
        <h3>Training and Validation Analysis (LSTM Model)</h3>
        <p>
          The training and validation loss decreased steadily over epochs, indicating that the model was learning effectively. However, 
          fluctuations in validation accuracy suggest possible overfitting in later epochs. The training accuracy steadily improved, while 
          validation accuracy showed variance, highlighting the challenge of generalizing across different driving scenarios. These trends 
          indicate a need for further optimization, such as regularization techniques or data augmentation, to improve the model's robustness.
        </p>
        
        <div className="chart-container">
          <TrainingChart modelName="LSTM" />
        </div>
        
        <h3>Training and Validation Analysis: Facial Movement Analysis (3D CNN Model)</h3>
        <p>
          The training and validation loss for the 3D CNN model exhibited a decreasing trend over epochs, reflecting effective learning. 
          However, fluctuations in validation loss in later epochs indicate potential overfitting, necessitating further regularization. 
          The training accuracy consistently improved, while the validation accuracy varied, likely due to differences in facial expressions 
          and environmental conditions. These results emphasize the need for additional data augmentation techniques to enhance generalization.
        </p>
        
        <div className="chart-container">
          <TrainingChart modelName="3D CNN (Facial)" />
        </div>
        
        <h3>Training and Validation Analysis: Vehicle Movement Analysis (3D CNN Model)</h3>
        <p>
          The training and validation accuracy of the 3D CNN model showed an increasing trend over epochs, but with noticeable fluctuations, 
          indicating sensitivity to specific training samples and potential overfitting. The training and validation loss generally exhibited 
          a decreasing trend, which suggests that the model is learning effectively. However, fluctuations in validation loss indicate 
          challenges in generalizing across different scenarios.
        </p>
        
        <div className="chart-container">
          <TrainingChart modelName="3D CNN (Vehicle)" />
        </div>
        
        <h3>Significance</h3>
        <p>
          The integration of visual data with sensor data using deep learning models significantly enhanced the accuracy and reliability of 
          driver behavior prediction. This multimodal approach also improves safety for deaf drivers by offering non-auditory, real-time 
          feedback based on both driver actions and environmental factors.
        </p>
      </Section>
    </>
  );
};

export default Results;