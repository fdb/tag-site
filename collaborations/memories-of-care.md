---
layout: collaboration
tags: ["collaboration", "figment"]
title: Memories of Care
subtitle: Martina Menegon research visit July 4-6 2023
credits: Martina Menegon, Frederik De Bleser, Lieven Menschaert
thumb_image: /static/media/memories-of-care/memories-of-care-thumb.jpeg
main_image: /static/media/memories-of-care/memories-of-care-cover.jpeg
---

The research visit is the start of Martina Menegon’s project "Memory of care”, an interactive experience and performative self-portrait exploring new possibilities for empathy and care for digital avatars.

The project uses Figment and Machine Learning to build Martina's AI self, which responds to her biometric data collected by a smart ring daily - specifically her readiness and tiredness level - and can interact with others.

The responses and interaction layers are dependent on Martina's physical state: as she becomes tired, it will be more challenging to interact with the virtual avatar - she will leave trails of movement and act slowly; under stress, the AI self will become more fragmented and abstract. As a result, neglecting physical needs (such as proper sleep and rest) will directly affect the digital body.

In linking Martina’s very personal data to her AI self, "Memories of Care" draws attention to our hybrid corporeality and how we can foster care both offline and, by extent, online.

<img src="/static/media/memories-of-care/blender-lod-all.png" alt="Different levels of detail for a 3D scanned model">

## Goal

The goal of the research visit was to collaborate intensively with an artist during a few days, introducing them to the possibilities of Figment and Machine Learning, and to help them develop a first prototype of their project. We discovered it was difficult to explain the concepts of conditional AI systems such as pix2pix, and that using them in a practical context, with their own material, helped made it "click" for the artist.

The concept was to link biometric data from the Oura smart ring to the generated AI system. We looked at a couple of biometric markers, selecting two aggregate statistics: the "daily readiness" score, representing a combination of biometric markers representing overall health, and the "daily sleep" score, representing an estimate of the artists' sleep health. We used Oura's API to retrieve the data.

In addition, we also wanted to use body pose estimation to generate a "skeleton" of the artist's body, which could be used to create an interactive installation. To link the health statistics to the skeleton, we create different versions of the real/digital body, which would be selected based on the health statistics. For example, if the artist had a high daily readiness score, the digital body would be a "clean" version of the artist's body, whereas a low score would be represented by a low-poly, decimated version of the body. We combined both 3D scans of the body as well as video material of the artist moving in front of a green screen.

To link the health data to the different representations, we colored the skeleton representation. A white skeleton meant a high daily readiness score, whereas a red skeleton meant a low daily readiness score. That meant that we could interpolate between different versions in AI using a real-time score, showing an ever-changing representation of the artist's health.

To represent "daily sleep" we used a "trail" node, which would leave a trail of the movements behind them. The trail would be more intense if the artist had a low daily sleep score, and less intense if the artist had a high daily sleep score. In that way, the trail represented the artist's laborious movements as she went tiredly through the day, which in turn made her virtual representation less responsive.

## Figment

We used Figment to create the different representations of the artist's body, and to link them to the health data:

<img src="/static/media/memories-of-care/figment-segment-lods.png" alt="Figment screenshot showing the process of preparing the data for training">

There are two custom nodes in the installation script:

Modulate Color On API: this node retrieves the daily readiness score and changes the color of the incoming image. Because the input image is a white skeleton, the score will modulate its color. A lower score will reduce the values of the green and blue channels, making the skeleton more red.
Constant On API: this node retrieves the daily sleep score and creates a background color, where the alpha value is based on the score. This node is then composited with the skeleton image and fed into a "trail" node.

<img src="/static/media/memories-of-care/figment-installation.png" alt="Figment screenshot showing the setup for the realtime installation">

## Installation

The installation was shown at the end of the research visit, and demonstrated the realtime aspect. The artist was able to interact with the virtual representation of herself, and see how her health data affected the representation.

<div class="side-by-side">
<video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/memories-of-care/installation-1.mp4" width="100%"></video>
<video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/memories-of-care/installation-2.mp4" width="100%"></video>
</div>

The installation runs both a live webcam feed and a pre-recorded video. If it can't detect a person in front of the webcam, it switches to the pre-recorded pose estimation video of Martina in an "idle" animation, slightly moving back and forth. This is to make sure that the installation is always showing something, even if there are no visitors in front of the camera.

<img src="/static/media/memories-of-care/memories-of-care-cover.jpeg" alt="Different apparations of the AI avatar">


## Credits

"Memories of Care" was initiated by [Martina Menegon](https://martinamenegon.xyz/). Machine Learning setup and training by Frederik De Bleser and Lieven Menschaert.
