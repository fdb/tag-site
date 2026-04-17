---
layout: collaboration
tags: ["collaboration"]
title: Whirly Loops
subtitle: Whirly tubes, custom built hardware, microcontrollers, software
description: Five whirly tubes hang from the ceiling at S.M.A.K. Ghent, spinning in response to visitors — an interactive sonic installation in dialogue with Aziz Hazara's Bow Echo.
credits: Lieven Menschaert, Frederik De Bleser, Cèlia Tort Pujol
thumb_image: /static/media/whirly-loops/whirly-loops-thumb.jpg
main_image: /static/media/whirly-loops/whirly-loops-cover.jpg
images:
  - /static/media/whirly-loops/whirly-loops-06.jpg
  - /static/media/whirly-loops/whirly-loops-07.jpg
---

*Whirly Loops* is an interactive installation built by the research group The Algorithmic Gaze of Sint Lucas Antwerpen. For this installation we were inspired by [Bow Echo by Aziz Hazara](https://smak.be/en/exhibitions/aziz-hazara-bow-echo), where five young boys climb a mountain and play the kazoo in strong winds. In dialogue with this work, we designed five "whirly tubes" controlled by motors that respond to visitors' movements, creating an evolving sonic experience. The generated wind answers back to Hazara's *Bow Echo*.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mcJf_YNCcAw"></iframe>
</div>

## How it works

Five corrugated plastic tubes hang from the ceiling of a gallery at S.M.A.K., Ghent. When they spin at the right frequencies, they catch the air and start singing.

<div class="side-by-side">
  <img src="/static/media/whirly-loops/whirly-loops-02.jpg" alt="Audience looking up at the tube installation">
  <img src="/static/media/whirly-loops/whirly-loops-04.jpg" alt="Motor mechanism mounted on the ceiling beam">
</div>

Each tube is driven by its own motor, controlled by an Arduino microcontroller. Four time-of-flight sensors measure the distance to whoever walks below. These readings travel over WiFi to a central *conductor*.

The conductor decides what happens: in its default mode, motors spin up based on visitor movement. When nobody is around, the installation begins playing a generative composition on its own: a slow, organic score where each tube follows its own gentle curve, like five voices singing in delicate harmonies. When a new visitor arrives, the score fades and the tubes return to listening.

<div class="side-by-side">
  <img src="/static/media/whirly-loops/whirly-loops-03.jpg" alt="Close-up of the corrugated tubes">
  <img src="/static/media/whirly-loops/whirly-loops-05.jpg" alt="SMAK ladder">
</div>

The whole system is tied together with MQTT, a lightweight messaging protocol. Each Arduino publishes and listens on simple topics. The conductor subscribes to all of them, runs the logic, and publishes motor commands back. A small web dashboard lets us monitor everything in real time — sensor readings, motor speeds, scene transitions and visitor activity.

<video loop autoplay muted playsinline src="/static/media/whirly-loops/shiftr-dashboard.mp4" width="100%"></video>

<img src="/static/media/whirly-loops/whirly-conductor.png" alt="The Whirly Conductor web dashboard showing motor speeds, sensor readings and scene transitions">


## Exhibition

- 2026, group exhibition: "Bow Echo", S.M.A.K., Ghent (1 April – 3 May 2026)

### Credits

- **Hardware research & design:** Lieven Menschaert
- **Software:** Frederik De Bleser
- **Concept & sonic development:** Cèlia Tort Pujol
- **Project coordination:** Aline Van Nereaux, Peter Aerts
- **Production manager:** Berdien Floré
- **Technical installation:** Christophe Claeys
