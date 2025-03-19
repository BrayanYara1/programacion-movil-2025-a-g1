import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>      
      <div className="welcome-card">
        <h2>Bienvenido a nuestra tienda!</h2>
        <p>Explora nuestros productos y disfruta de las mejores ofertas.</p>
      </div>
    </div>
  );
};

export default ExploreContainer;
