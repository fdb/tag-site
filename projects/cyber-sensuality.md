---
layout: project
tags: ["project", "figment"]
title: Cyber Sensuality
subtitle: Training an AI Dancer through PIX2PIX
credits: Nikola Scheibe, Alexandra Fraser, Madina Mahomedova, Mazarine Haarscheer and David Bello Arcos
thumb_image: /static/media/cyber-sensuality/cyber-sensuality-thumb.jpg
main_image: /static/media/cyber-sensuality/cyber-sensuality-featured.jpg
images:
  - /static/media/cyber-sensuality/nika-alex-watching.jpeg
  - /static/media/cyber-sensuality/nika-dancer.png
---

The AI dancer was created during the LAbO 2021 summer school as part of the "Cyber Sensuality" project. After training AI (Artificial Intelligence) on different gendered bodies and private intuitive acts, it eventually responded with its own forms of virtual sensuality through gesture, movement and sound. Out of this training emerged a gender-fluid avatar.

This begs not only the question of power and understanding of ‘erotic’ movement inside an algorithm, but also how eroticism is gendered. Can the AI perceive subtle signs of arousal to understand our displays of embodiment? Suggestive glimpses and subconscious human desires are translated into the virtual world.

During the performance we show and interact with the AI’s interpretation of the erotic, resulting in a flirtatious conversation with artificial intelligence.

## Training

To train the AI we recorded a number of performances with dancers. Using pose detection we tracked the movements of the dancers. We then used [pix2pix](https://affinelayer.com/pixsrv/) to train the AI in understanding the correlation between the body and its pose.

<figure>
<video loop autoplay muted src="https://tag-site.s3-eu-central-1.amazonaws.com/cyber-sensuality/berkey-short-fade.mp4" width="100%"></video>
<figcaption>One of the dancers and the corresponding pose. This served as input for the training.</figcaption></figure>

Through the process of training we can see the results improve:

<figure>
<video loop autoplay muted src="https://tag-site.s3-eu-central-1.amazonaws.com/cyber-sensuality/2021-erotique-training.mp4" width="100%"></video>
<figcaption>Watching the dancer gradually improving through training.</figcaption></figure>

## Results

After training we fed the AI dancer with poses from a dancer it had never seen. This resulted in mesmerizing, sometimes bizarre movements, that switched seamlessly between bodies and genders.

<figure>
<video loop autoplay muted src="https://tag-site.s3-eu-central-1.amazonaws.com/cyber-sensuality/ai-dancer-short-fade.mp4" width="100%"></video>
<figcaption>A short fragment of the final video.</figcaption></figure>

Next to bodies we also trained the AI on faces:

<figure>
<video loop autoplay muted src="https://tag-site.s3-eu-central-1.amazonaws.com/cyber-sensuality/face-short.mp4" width="100%"></video>
<figcaption>Faces being generated using a face mesh.</figcaption></figure>

## Credits

Cyber Sensuality was a project created and presented during the [ChampdAction LAbO 2021 summer school](https://www.champdactionlabo.be/) at deSingel, Antwerp.

### Performers:

- [Nikola Scheibe](https://www.linkedin.com/in/nikola-scheibe-853915149/)
- [Alexandra Fraser](https://www.instagram.com/alexandra_fraser_art/)
- [Madina Mahomedova](https://www.instagram.com/bringulda/)
- Mazarine Haarscheer
- [David Bello Arcos](https://www.instagram.com/davidbello32/)
- [Erik Berkey](https://theberkey.se/)
- [Myrthe Bokelmann](https://myrthebokelmann.com/)
