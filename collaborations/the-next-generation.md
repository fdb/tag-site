---
layout: collaboration
tags: ["collaboration", "figment"]
title: The Next Generation
subtitle: A collage of the faces of tomorrow
credits: Frederik De Bleser, Lieven Menschaert
thumb_image: /static/media/next-generation/next-generation-thumb.jpg
main_image: /static/media/next-generation/next-generation-featured.jpg
images:
  - /static/media/next-generation/next-generation-featured.jpg
---
For the opening of the academic year, research group The Algorithmic Gaze (Sint Lucas Antwerp, KdG) organized an experiment in which elementary school children were filmed and questioned about their interests and dreams. The images were then processed by an AI algorithm and synthesized into new images, new faces, the new generation.

After recording all faces, we used [Figment](https://figmentapp.com/) with Google's [MediaPipe](https://mediapipe.dev/) to extract the face mesh from the video recordings.

<figure>
  <video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/next-generation/faces-snippet-segmented.mp4" width="100%"></video>
  <figcaption>Extracting the face mesh from a video recording.</figcaption>
</figure>

We used NVIDIA's [pix2pixHD](https://tcwang0509.github.io/pix2pixHD/) algorithm, a high-quality conditional GAN to learn the mapping between segmented face masks and the recorded video footage. 

<figure>
  <video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/next-generation/training-progress.mp4" width="100%"></video>
  <figcaption>Training gradually improved over time.</figcaption>
</figure>

We performed extensive testing and re-training, checking difficult conditions (e.g. side-facing, looking up, blinking) and the limitations of the segmentation algorithm. We discovered that there is a "sweet spot"; placing your face too close or too far would introduce distortions.

<figure>
  <img src="/static/media/next-generation/face-errors.jpg" alt="Errors in training">
  <figcaption>Typical errors occuring in training: misplaced eyes and noses, distorted faces due to incorrect segmentation</figcaption>
</figure>


Through a custom-built app, we could control the algorithm interactively via webcam:

<div class="side-by-side">
  <figure>
  <img src="/static/media/next-generation/webcam-imane.jpg" alt="Researcher Imane Benyecif experimenting with the trained model">
  <figcaption>Researcher Imane Benyecif experimenting with the trained model</figcaption>
  </figure>
  <figure>
  <img src="/static/media/next-generation/webcam-lieven.jpg" alt="Researcher Lieven Menschaert experimenting with the trained model">
  <figcaption>Researcher Lieven Menschaert experimenting with the trained model</figcaption>
  </figure>
</div>

We invited the elementary school students back to our campus to present the results of the training, allowing them to experience and play with the model through the webcam. They discovered they could find their own likeness in the model, but also that of their friends:

<figure>
  <img src="/static/media/next-generation/sla-presentation.jpg" alt="Presentation of the interactive AI at Sint Lucas Antwerpen">
  <figcaption>Presentation of the interactive AI at Sint Lucas Antwerpen</figcaption>
</figure>

A production movie of the project was presented during the [academic opening](https://www.auha.be/opening-academiejaar-2022-2023/), on Thursday, September 29nd, in the [Stadsschouwburg Antwerpen](https://www.stadsschouwburg-antwerpen.be/en/home).

## Credits
- Isabelle De Ridder (University of Antwerp) — project lead
- Frederik De Bleser, Lieven Menschaert — machine learning and development
- Mathias Mallentjer, Brent Meynen (Production Office) — general production
- Alexandra Fraser (Sint Lucas Antwerpen) — feedback and interviews
- Ine Vanoeveren, Imane Benyecif — testing and support