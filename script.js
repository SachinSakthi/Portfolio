// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Night Mode Toggle
const nightModeToggle = document.getElementById('night-mode-toggle');
const body = document.body;

nightModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    nightModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Project Data (Store details for each project)
const projects = {
    tracking: {
        title: "Visual Object Tracking",
        details: `
            <!-- Project 1: Visual Object Tracking -->
                <div class="project-item">
                    <div class="project-header">
                        <h1>Visual Object Tracking</h1>
                    </div>
                    <div class="project-content">
                        <!-- Sub-Project A -->
                        <div class="sub-project">
                            <h2>Context-Aware Environmental Residual Correlation Filter for Robust Tracking</h2>
                            <p>Tracking objects in real-world scenarios requires handling rapid motion, occlusions, scale variations, and background clutter. In this project, I developed a correlation filter-based tracker (CAERDCF) that utilizes environmental residual learning and multi-feature fusion to improve robustness against challenging conditions. The method significantly enhances tracking adaptability by incorporating context-aware patches and a selective spatial regularizer, preventing drift and boundary artifacts.</p>
                            <div class="skills-highlights">
                                <div class="skills">
                                    <h5>Skills Learned:</h5>
                                    <ul>
                                        <li>Correlation filter-based tracking and spatial regularization techniques</li>
                                        <li>Feature extraction from deep convolutional networks</li>
                                        <li>Benchmarking on datasets like OTB2015, UAV123, LaSOT, and GOT10K</li>
                                    </ul>
                                </div>
                                <div class="highlights">
                                    <h5>Key Highlights:</h5>
                                    <ul>
                                        <li>Increased tracking precision by <strong>12.9% on OTB2015</strong> and <strong>16.1% on TempleColor128</strong> compared to BACF.</li>
                                        <li>Introduced an efficient environmental data acquisition strategy without additional computational cost.</li>
                                        <li>Published in <em>Mathematics (MDPI)</em>.</li>
                                    </ul>
                                </div>
                            </div>                                                 
                            <h3>Overall framework of Proposed method</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/CAERDCF FRAMEWORK.jpg" alt="SiamAdapt Tracking Performance">
                                <p class="caption">Illustration of tracking robustness under various challenging conditions.</p>
                            </div>        
                            <h3>Comparison Results</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/CAERDCF RESULTS.jpg" alt="CAERDCF Tracking Performance">
                                <p class="caption">Visual comparison of tracking performance with different trackers.</p>
                            </div>
                        </div>

                        <!-- Sub-Project B -->
                        <div class="sub-project">
                            <h2>Multi-Level Hybrid Siamese Network with Box Adaptive Approach (SiamAdapt)</h2>
                            <p>Siamese-based trackers have demonstrated strong performance, but many rely on predefined anchor boxes, making them sensitive to target scale variations. This project introduced SiamAdapt, a proposal-free tracking approach that eliminates anchor dependency, using a box-adaptive method to improve tracking accuracy. The framework incorporates ranking-based classification loss and IoU-guided ranking loss, optimizing both localization and classification.</p>
                            <div class="skills-highlights">
                                <div class="skills">
                                    <h5>Skills Learned:</h5>
                                    <ul>
                                        <li>Siamese-based object tracking and feature matching techniques</li>
                                        <li>Designing anchor-free object detection methods</li>
                                        <li>Optimization of classification and regression tasks in tracking</li>
                                    </ul>
                                </div>
                                <div class="highlights">
                                    <h5>Key Highlights:</h5>
                                    <ul>
                                        <li>Achieved leading performance on <strong>OTB100, UAV123, GOT-10K, VOT2018, VOT2019, and LaSOT</strong>.</li>
                                        <li>Operates at real-time speed with high efficiency.</li>
                                        <li>Published in <em>Multimedia Tools and Applications (Springer)</em>.</li>
                                    </ul>
                                </div>
                            </div>                            
                            <h3>Overall framework of Proposed method</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/SIAMADAPT FRAMEWORK.jpg" alt="SiamAdapt Tracking Performance">
                                <p class="caption">Illustration of tracking robustness under various challenging conditions.</p>
                            </div>
                            <h3>Comparison Results</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/SIAMADAPT RESULTS.jpg" alt="SiamAdapt Tracking Performance">
                                <p class="caption">Illustration of tracking robustness under various challenging conditions.</p>
                            </div>
                        </div>

                        <!-- Sub-Project C -->
                        <div class="sub-project">
                            <h2>Keypoint Prediction Enhanced Siamese Tracker with Attention Mechanisms</h2>
                            <p>This project aimed to improve localization in tracking by incorporating keypoint prediction within a Siamese network. The model refines tracking accuracy using a progressive heatmap refinement technique that sharpens target positions. Additionally, self-attention and cross-attention mechanisms are used to enhance feature representations, improving tracking robustness in cluttered scenes.</p>
                            <div class="skills-highlights">
                                <div class="skills">
                                    <h5>Skills Learned:</h5>
                                    <ul>
                                        <li>Keypoint-based tracking and heatmap refinement</li>
                                        <li>Self-attention and cross-attention techniques for feature extraction</li>
                                        <li>Handling occlusion, scale variation, and appearance changes in tracking</li>
                                    </ul>
                                </div>
                                <div class="highlights">
                                    <h5>Key Highlights:</h5>
                                    <ul>
                                        <li>Improved accuracy on <strong>LaSOT, GOT-10K, OTB100, and UAV123</strong>, surpassing state-of-the-art methods.</li>
                                        <li>Introduced a multi-stage refinement process for precise object localization.</li>
                                        <li>Published in <em>Expert Systems with Applications (Elsevier)</em>.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="showcase-image">
                                <h3>Overall framework of Proposed method</h3>
                                <img src="assets/Results/SIAMRAKPN FRAMEWORK.jpg" alt="Keypoint Tracker Performance">
                                <p class="caption">Visual comparison of keypoint prediction versus standard tracking methods.</p>
                            </div>
                            <h3>Comparison Results</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/SIAMRAKPN RESULTS.jpg" alt="Keypoint Tracker Performance">
                                <p class="caption">Visual comparison of keypoint prediction versus standard tracking methods.</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
    },
    detection: {
        title: "Object Detection",
        details: `
            <!-- Project 2: Object Detection -->
                <div class="project-item">
                    <div class="project-header">
                        <h1>Object Detection</h1>
                    </div>
                    <div class="project-content">
                        <div class="sub-project">
                            <h2>Hybrid Multi-Attention Transformer for Robust Video Object Detection (HyMATOD)</h2>
                            <p>Video object detection (VOD) is particularly challenging due to motion blur, occlusions, and appearance changes. This project developed HyMATOD, a transformer-based model with a Hybrid Multi-Attention (HyMAT) module, which improves temporal consistency by enhancing target-background embeddings. By integrating self- and cross-attention blocks, the model achieves superior detection accuracy across frames.</p>
                            <div class="skills-highlights">
                                <div class="skills">
                                    <h5>Skills Learned:</h5>
                                    <ul>
                                        <li>Transformer-based object detection models</li>
                                        <li>Attention mechanisms for refining object-background relations</li>
                                        <li>Temporal consistency techniques for video-based detection</li>
                                    </ul>
                                </div>
                                <div class="highlights">
                                    <h5>Key Highlights:</h5>
                                    <ul>
                                        <li>Achieved <strong>86.7% mean Average Precision (mAP)</strong> on ImageNet VID, outperforming existing methods.</li>
                                        <li>Integrated a lightweight transformer framework for real-time object detection.</li>
                                        <li>Published in <em>Engineering Applications of Artificial Intelligence (Elsevier)</em>.</li>
                                    </ul>
                                </div>
                            </div>                            
                            <h3>Overall framework of HyMATOD</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/DETECTION FRAMEWORK.jpg" alt="HyMATOD Performance">
                                <p class="caption">Comparison of HyMATOD performance on benchmark datasets.</p>
                            </div>
                            <h3>Comparison Results</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/DETECTION RESULTS.jpg" alt="HyMATOD Performance">
                                <p class="caption">Comparison of HyMATOD performance on benchmark datasets.</p>
                            </div>
                        </div>
                    </div>
                </div>

        `
    },
    segmentation: {
        title: "Object Segmentation",
        details: `
             <!-- Project 3: Object Segmentation -->
                <div class="project-item">
                    <div class="project-header">
                        <h1>Object Segmentation</h1>
                    </div>
                    <div class="project-content">
                        <div class="sub-project">
                            <h2>Semi-Supervised One-Shot Learning for Video Object Segmentation (OSOSM)</h2>
                            <p>Accurate segmentation in dynamic video environments is critical for applications like autonomous navigation and video analytics. This project introduced OSOSM, a one-shot learning approach for instance segmentation. The method enables robust segmentation by using a single labeled frame to adapt the model dynamically across sequences. The model further incorporates fast bilateral solver (FBS) for background alignment and a parallel contour detection branch for sharp object boundaries.</p>
                            <div class="skills-highlights">
                                <div class="skills">
                                    <h5>Skills Learned:</h5>
                                    <ul>
                                        <li>One-shot learning for segmentation using deep learning</li>
                                        <li>Efficient background-foreground separation techniques</li>
                                        <li>Contour-based object segmentation using parallel processing</li>
                                    </ul>
                                </div>
                                <div class="highlights">
                                    <h5>Key Highlights:</h5>
                                    <ul>
                                        <li>Achieved state-of-the-art segmentation accuracy on <strong>DAVIS and YouTube-VOS</strong> benchmarks.</li>
                                        <li>Designed a lightweight and memory-efficient segmentation model.</li>
                                        <li>Published in <em>Multimedia Tools and Applications (Springer)</em>.</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Comparison Results</h3>
                            <div class="showcase-image">
                                <img src="assets/Results/SEGMENT RESULTS1.jpg" alt="OSOSM Segmentation Results">
                                <p class="caption">Side-by-side comparison of segmentation results on different sequences.</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
};

// Open Modal
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.project;
        const project = projects[projectId];
        document.getElementById('modal-body').innerHTML = project.details;
        document.getElementById('project-modal').style.display = "block";
    });
});

// Close Modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = "none";
});

// Close when clicking outside modal
window.onclick = (event) => {
    if (event.target == document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = "none";
    }
};