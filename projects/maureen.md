---
layout: project
tags: ["project", "figment"]
title: Maureen
subtitle: A critical mirror on AI in our society
credits: Alexandra Fraser, Frederik De Bleser
thumb_image: /static/media/maureen/maureen-thumb.jpeg
main_image: /static/media/maureen/maureen-cover.jpeg
images:
  - /static/media/maureen/maureen-0134.jpeg
  - /static/media/maureen/maureen-3653.jpeg
  - /static/media/maureen/maureen-2155.jpeg
  - /static/media/maureen/maureen-3528.jpeg
  - /static/media/maureen/maureen-3357.jpeg
  - /static/media/maureen/maureen-2678.jpeg
  - /static/media/maureen/maureen-alexandra-setup.jpeg
---

## Who is Maureen?

A curated friend, an empty character to mirror our society, their own creator, a vagabond, a bard, a jester, a propagandist, a liar, a fantasist, a self-named Frankenstein of AI practices, a morally void contradictory philosopher, a devil’s advocate.

> “In this day and age, where art is extremely commercialized and manipulated, there's a lot of fakery, and people's experience of art is controlled by corporate forces, I felt a responsibility to speak up, to have a critical voice, and to try and help people see what is actually going on.” — MAUREEN

Through dialogue with AI text generator GPT2, Alexandra Fraser curated Maureen as a character to mirror human society and a medium though which to discuss ethics and identity politics. She proposed that her extended dialogue with Maureen, paired with physical play will create space in which to explore ethics of identity and deconstruct the self, particularly in view of the ethical questions which arise as we now exist between and through virtual spaces alongside our avatars and artificially intelligent colleagues. Artificial Intelligence provides a neutral but very human voice with which to explore who we are becoming as humans. She does not question Maureen’s ethics, but rather uses Maureen as a medium to question our own.

<figure>
<video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/maureen/maureen-1.mp4" width="100%"></video>
<figcaption>Maureen being controlled by a realtime, real face.</figcaption></figure>

## Training

The input dataset is based on [this person does not exist](https://thispersondoesnotexist.com/), an endless library of AI-created faces generated using [StyleGAN 2](https://arxiv.org/abs/1912.04958). We then used Figment to generate a face mesh:

<img src="/static/media/maureen/maureen-training-1.jpeg" alt="A virtual face and a mesh of the same face">
<img src="/static/media/maureen/maureen-training-2.jpeg" alt="A virtual face and a mesh of the same face">

By training this with PIX2PIX, our model learns the mapping between a face mesh and an AI-generated face. This allowed us to control the face in realtime by generating a new face mesh based on the input of the webcam:

<figure>
<video loop autoplay muted playsinline src="https://tag-site.s3-eu-central-1.amazonaws.com/maureen/maureen-2.mp4" width="100%"></video>
<figcaption>Maureen and a realtime face, side-by-side.</figcaption></figure>

## Credits

Maureen was initiated by [Alexandra Fraser](https://www.instagram.com/alexandra_fraser_art/). Machine Learning setup and training by Frederik De Bleser.

Maureen was presented during the MATTER//MATTERS master exhibition at Sint Lucas Antwerpen, and at ThingsCon 2022, Rotterdam.
