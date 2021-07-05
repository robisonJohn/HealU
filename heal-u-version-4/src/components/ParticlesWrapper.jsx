import Particles from 'react-particles-js';
import './Particles.css';

// this component will enable us to have less space / noise taking up our primary App.js page

function ParticlesWrapper() {
    return (
        <Particles
            className="particles-canvas"
            params={{
                particles: {
                number: {
                    value: 30,
                    density: {
                    enable: true,
                    value_area: 900,
                    }
                },
                shape: {
                    type: "square",
                    stroke: {
                    width: 6,
                    color: '#f9ab00'
                    }
                }
                }
            }}
            />
    )

};

export default ParticlesWrapper;