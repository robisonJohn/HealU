import Particles from 'react-particles-js';

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
                                color: '#6a0dad'
                                }
                            }
                            }
                        }}
                        />
    )
}

export default ParticlesWrapper;