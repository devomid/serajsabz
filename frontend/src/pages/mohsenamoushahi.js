import { Box, Button, Typography } from '@mui/joy';
import Particles from '@tsparticles/react';
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { GeneralState } from '../contexts/generalContext';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';

const Mohsenamoushahi = () => {
    const { menuOpen, setMenuOpen, isHome, setIsHome } = GeneralState();

    const navigate = useNavigate();

    const particlesLoaded = () => {
        console.log('loaded');
    };

    const options = useMemo(
        () => (
            {
                "autoPlay": true,
                "background": {
                    "color": {
                        "value": "#0c4b53"
                    },
                    "image": "",
                    "position": "",
                    "repeat": "",
                    "size": "cover",
                    "opacity": 1
                },
                "backgroundMask": {
                    "composite": "destination-out",
                    "cover": {
                        "color": {
                            "value": "#000"
                        },
                        "opacity": 0.7
                    },
                    "enable": false
                },
                "clear": true,
                "defaultThemes": {},
                "delay": 0,
                "fullScreen": {
                    "enable": true,
                    "zIndex": 0
                },
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                    "detectsOn": "window",
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onDiv": {
                            "selectors": {},
                            "enable": true,
                            "mode": {},
                            "type": "circle"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "grab",
                            "parallax": {
                                "enable": true,
                                "force": 60,
                                "smooth": 20
                            }
                        },
                        "resize": {
                            "delay": 0.6,
                            "enable": true
                        }
                    },
                    "modes": {
                        "trail": {
                            "delay": 1,
                            "pauseOnStop": false,
                            "quantity": 1
                        },
                        "attract": {
                            "distance": 200,
                            "duration": 0.4,
                            "easing": "ease-out-quad",
                            "factor": 1,
                            "maxSpeed": 80,
                            "speed": 1
                        },
                        "bounce": {
                            "distance": 200
                        },
                        "bubble": {
                            "distance": 600,
                            "duration": 5,
                            "mix": true,
                            "opacity": 0.3,
                            "size": 40,
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "mix": false,
                                "selectors": {}
                            }
                        },
                        "connect": {
                            "distance": 10,
                            "links": {
                                "opacity": 0.4
                            },
                            "radius": 10
                        },
                        "grab": {
                            "distance": 400,
                            "links": {
                                "blink": true,
                                "consent": false,
                                "opacity": 0.5
                            }
                        },
                        "push": {
                            "default": true,
                            "groups": [],
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4,
                            "factor": 100,
                            "speed": 1,
                            "maxSpeed": 50,
                            "easing": "ease-out-quad",
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "selectors": {}
                            }
                        },
                        "slow": {
                            "factor": 3,
                            "radius": 200
                        },
                        "light": {
                            "area": {
                                "gradient": {
                                    "start": {
                                        "value": "#ffffff"
                                    },
                                    "stop": {
                                        "value": "#000000"
                                    }
                                },
                                "radius": 1000
                            },
                            "shadow": {
                                "color": {
                                    "value": "#000"
                                },
                                "length": 2000
                            }
                        }
                    }
                },
                "manualParticles": [],
                "particles": {
                    "bounce": {
                        "horizontal": {
                            "value": 1
                        },
                        "vertical": {
                            "value": 1
                        }
                    },
                    "collisions": {
                        "absorb": {
                            "speed": 2
                        },
                        "bounce": {
                            "horizontal": {
                                "value": 1
                            },
                            "vertical": {
                                "value": 1
                            }
                        },
                        "enable": false,
                        "maxSpeed": 50,
                        "mode": "bounce",
                        "overlap": {
                            "enable": true,
                            "retries": 0
                        }
                    },
                    "color": {
                        "value": "#000",
                        "animation": {
                            "h": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            },
                            "s": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            },
                            "l": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": true,
                                "offset": 0
                            }
                        }
                    },
                    "effect": {
                        "close": true,
                        "fill": true,
                        "options": {},
                        "type": {}
                    },
                    "groups": [],
                    "move": {
                        "angle": {
                            "offset": 0,
                            "value": 90
                        },
                        "attract": {
                            "distance": 200,
                            "enable": false,
                            "rotate": {
                                "x": 3000,
                                "y": 3000
                            }
                        },
                        "center": {
                            "x": 50,
                            "y": 50,
                            "mode": "percent",
                            "radius": 0
                        },
                        "decay": 0,
                        "distance": {},
                        "direction": "none",
                        "drift": 0,
                        "enable": true,
                        "gravity": {
                            "acceleration": 1,
                            "enable": false,
                            "inverse": false,
                            "maxSpeed": 50
                        },
                        "path": {
                            "clamp": true,
                            "delay": {
                                "value": 0
                            },
                            "enable": false,
                            "options": {}
                        },
                        "outModes": {
                            "default": "out",
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        },
                        "random": false,
                        "size": false,
                        "speed": 1.4,
                        "spin": {
                            "acceleration": 0,
                            "enable": false
                        },
                        "straight": false,
                        "trail": {
                            "enable": false,
                            "length": 10,
                            "fill": {}
                        },
                        "vibrate": true,
                        "warp": true
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "width": 1080,
                            "height": 1080
                        },
                        "limit": {
                            "mode": "delete",
                            "value": 0
                        },
                        "value": 100
                    },
                    "opacity": {
                        "value": {
                            "min": 0.1,
                            "max": 0.5
                        },
                        "animation": {
                            "count": 0,
                            "enable": true,
                            "speed": 3,
                            "decay": 0,
                            "delay": 0,
                            "sync": false,
                            "mode": "auto",
                            "startValue": "random",
                            "destroy": "none"
                        }
                    },
                    "reduceDuplicates": false,
                    "shadow": {
                        "blur": 0,
                        "color": {
                            "value": "#000"
                        },
                        "enable": false,
                        "offset": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "shape": {
                        "close": false,
                        "fill": true,
                        "options": {},
                        "type": "circle"
                    },
                    "size": {
                        "value": {
                            "min": 1,
                            "max": 10
                        },
                        "animation": {
                            "count": 0,
                            "enable": true,
                            "speed": 20,
                            "decay": 0,
                            "delay": 0,
                            "sync": false,
                            "mode": "auto",
                            "startValue": "random",
                            "destroy": "none"
                        }
                    },
                    "stroke": {
                        "width": 0
                    },
                    "zIndex": {
                        "value": 0,
                        "opacityRate": 1,
                        "sizeRate": 1,
                        "velocityRate": 1
                    },
                    "destroy": {
                        "bounds": {},
                        "mode": "none",
                        "split": {
                            "count": 1,
                            "factor": {
                                "value": 3
                            },
                            "rate": {
                                "value": {
                                    "min": 4,
                                    "max": 9
                                }
                            },
                            "sizeOffset": true,
                            "particles": {}
                        }
                    },
                    "roll": {
                        "darken": {
                            "enable": false,
                            "value": 0
                        },
                        "enable": false,
                        "enlighten": {
                            "enable": false,
                            "value": 0
                        },
                        "mode": "vertical",
                        "speed": 25
                    },
                    "tilt": {
                        "value": 0,
                        "animation": {
                            "enable": true,
                            "speed": 0,
                            "decay": 0,
                            "sync": false
                        },
                        "direction": "clockwise",
                        "enable": false
                    },
                    "twinkle": {
                        "lines": {
                            "enable": false,
                            "frequency": 0.05,
                            "opacity": 1
                        },
                        "particles": {
                            "enable": false,
                            "frequency": 0.05,
                            "opacity": 1
                        }
                    },
                    "wobble": {
                        "distance": 5,
                        "enable": false,
                        "speed": {
                            "angle": 50,
                            "move": 10
                        }
                    },
                    "life": {
                        "count": 0,
                        "delay": {
                            "value": 0,
                            "sync": false
                        },
                        "duration": {
                            "value": 0,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "animation": {
                            "enable": false,
                            "speed": 0,
                            "decay": 0,
                            "sync": false
                        },
                        "direction": "clockwise",
                        "path": false
                    },
                    "orbit": {
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 1,
                            "decay": 0,
                            "delay": 0,
                            "sync": false
                        },
                        "enable": false,
                        "opacity": 1,
                        "rotation": {
                            "value": 45
                        },
                        "width": 1
                    },
                    "links": {
                        "blink": false,
                        "color": {
                            "value": "#000"
                        },
                        "consent": true,
                        "distance": 150,
                        "enable": true,
                        "frequency": 1,
                        "opacity": 0.6,
                        "shadow": {
                            "blur": 5,
                            "color": {
                                "value": "#000"
                            },
                            "enable": false
                        },
                        "triangles": {
                            "enable": true,
                            "frequency": 0.005
                        },
                        "width": 1,
                        "warp": false
                    },
                    "repulse": {
                        "value": 0,
                        "enabled": false,
                        "distance": 1,
                        "duration": 1,
                        "factor": 1,
                        "speed": 1
                    }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [],
                "smooth": true,
                "style": {},
                "themes": [],
                "zLayers": 100,
                "name": "Parallax",
                "motion": {
                    "disable": true,
                    "reduce": {
                        "factor": 4,
                        "value": true
                    }
                }
            }
        )
    )

    return (
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'start', marginTop: '7rem' }}>
            <Box sx={{ zIndex: -1 }}>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </Box>
            <Box sx={{ display: menuOpen ? 'none' : 'flex', zIndex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderRadius: 'lg', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(3px) saturate(150%)', marginLeft: 3, marginRight: 3, padding: 4, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>

                <Box sx={{ width: '50%' }}>
                    <img style={{ borderRadius: 15, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} src='https://ohdearstudio.com.sg/wp-content/uploads/2021/05/OhDearStudio_019-1024x683.jpg' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center', alignItems: 'center', width: '40%', height: '100%' }}>
                    <Box sx={{ alignSelf: 'start' }}>
                        <Typography sx={{ color: 'white', marginBottom: 2 }} level='h2' alignSelf={'start'}>
                            How to connect with Mohsen Amoushahi
                        </Typography>
                        <Typography sx={{ color: 'white' }} level='h5' alignSelf={'start'}>
                            Chief Marketing Officer
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Button sx={{ height: 60, color: "#0c4b53" }} variant='soft' fullWidth>Instagram</Button>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Button sx={{ height: 60, color: "#0c4b53" }} variant='soft' fullWidth>Telegram</Button>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Button sx={{ height: 60, color: "#0c4b53" }} variant='soft' fullWidth>WhatsApp</Button>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Button sx={{ height: 60, color: "#0c4b53" }} variant='soft' fullWidth>Phone</Button>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Button sx={{ height: 60, color: "#0c4b53" }} variant='soft' fullWidth>Github</Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Mohsenamoushahi

