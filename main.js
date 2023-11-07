document.querySelector('#intro').addEventListener('click', () => {
    document.querySelector('#puslapis').classList.add('openDialog');
    const modalas = document.createElement('dialog');

    const div1 = document.createElement('div');
    const modalName = document.createElement('h1');
    const modalNameText = document.createTextNode('INTRO');
    modalName.appendChild(modalNameText);

    const close = document.createElement('img');
    close.setAttribute('src', './resources/xmark-solid.svg');
    close.addEventListener('click', e => {
        modalas.close();
        modalas.remove();
        document.querySelector('#puslapis').classList.remove('openDialog');
    });

    div1.append(modalName, close);

    const div2 = document.createElement('div');
    const modalVideo = document.createElement('video');
    modalVideo.setAttribute('src', './resources/tab-1.mp4');
    modalVideo.controls = true;

    const modalParagraph1 = document.createElement('p');
    const modalParagraph1Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae exercitationem maxime, in voluptatem vero provident temporibus magnam officia blanditiis?');
    modalParagraph1.appendChild(modalParagraph1Text);
    const modalParagraph2 = document.createElement('p');
    const modalParagraph2Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae exercitationem maxime, in voluptatem vero provident temporibus magnam officia blanditiis?');
    modalParagraph2.appendChild(modalParagraph2Text);

    div2.append(modalVideo, modalParagraph1, modalParagraph2);
    modalas.append(div1, div2);

    document.querySelector('#modalui').appendChild(modalas);
});

document.querySelector('#work').addEventListener('click', () => {
    document.querySelector('#puslapis').classList.add('openDialog');
    const modalas = document.createElement('dialog');

    const div1 = document.createElement('div');
    const modalName = document.createElement('h1');
    const modalNameText = document.createTextNode('WORK');
    modalName.appendChild(modalNameText);

    const close = document.createElement('img');
    close.setAttribute('src', './resources/xmark-solid.svg');
    close.addEventListener('click', e => {
        modalas.close();
        modalas.remove();
        document.querySelector('#puslapis').classList.remove('openDialog');
    });

    div1.append(modalName, close);

    const div2 = document.createElement('div');
    const modalImage = document.createElement('img');
    modalImage.setAttribute('src', './resources/tab-2.jpg');

    const modalParagraph1 = document.createElement('p');
    const modalParagraph1Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat excepturi minus? Error expedita est atque. Hic obcaecati aspernatur rem?');
    modalParagraph1.appendChild(modalParagraph1Text);
    const modalParagraph2 = document.createElement('p');
    const modalParagraph2Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat excepturi minus? Error expedita est atque. Hic obcaecati aspernatur rem?');
    modalParagraph2.appendChild(modalParagraph2Text);

    div2.append(modalImage, modalParagraph1, modalParagraph2);
    modalas.append(div1, div2);

    document.querySelector('#modalui').appendChild(modalas);
});

document.querySelector('#about').addEventListener('click', () => {
    document.querySelector('#puslapis').classList.add('openDialog');
    const modalas = document.createElement('dialog');

    const div1 = document.createElement('div');
    const modalName = document.createElement('h1');
    const modalNameText = document.createTextNode('ABOUT');
    modalName.appendChild(modalNameText);

    const close = document.createElement('img');
    close.setAttribute('src', './resources/xmark-solid.svg');
    close.addEventListener('click', e => {
        modalas.close();
        modalas.remove();
        document.querySelector('#puslapis').classList.remove('openDialog');
    });

    div1.append(modalName, close);

    const div2 = document.createElement('div');
    const modalImage = document.createElement('img');
    modalImage.setAttribute('src', './resources/tab-3.jpg');

    const modalParagraph1 = document.createElement('p');
    const modalParagraph1Text = document.createTextNode('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellat possimus, doloremque dolorum voluptatem dolore iusto quasi repudiandae tenetur. Ducimus, sapiente?');
    modalParagraph1.appendChild(modalParagraph1Text);
    const modalParagraph2 = document.createElement('p');
    const modalParagraph2Text = document.createTextNode('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellat possimus, doloremque dolorum voluptatem dolore iusto quasi repudiandae tenetur. Ducimus, sapiente?');
    modalParagraph2.appendChild(modalParagraph2Text);

    div2.append(modalImage, modalParagraph1, modalParagraph2);
    modalas.append(div1, div2);

    document.querySelector('#modalui').appendChild(modalas);
});

document.querySelector('#contact').addEventListener('click', () => {
    document.querySelector('#puslapis').classList.add('openDialog');
    const modalas = document.createElement('dialog');

    const div1 = document.createElement('div');
    const modalName = document.createElement('h1');
    const modalNameText = document.createTextNode('CONTACT');
    modalName.appendChild(modalNameText);

    const close = document.createElement('img');
    close.setAttribute('src', './resources/xmark-solid.svg');
    close.addEventListener('click', e => {
        modalas.close();
        modalas.remove();
        document.querySelector('#puslapis').classList.remove('openDialog');
    });

    div1.append(modalName, close);

    const div2 = document.createElement('div');
    const modalImage = document.createElement('img');
    modalImage.setAttribute('src', './resources/tab-4.jpg');

    const modalParagraph1 = document.createElement('p');
    const modalParagraph1Text = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum consectetur officiis rem pariatur, tempora delectus, asperiores itaque modi assumenda sapiente architecto dolorum soluta. Numquam, ipsam!');
    modalParagraph1.appendChild(modalParagraph1Text);
    const modalParagraph2 = document.createElement('p');
    const modalParagraph2Text = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum consectetur officiis rem pariatur, tempora delectus, asperiores itaque modi assumenda sapiente architecto dolorum soluta. Numquam, ipsam!');
    modalParagraph2.appendChild(modalParagraph2Text);

    div2.append(modalImage, modalParagraph1, modalParagraph2);
    modalas.append(div1, div2);

    document.querySelector('#modalui').appendChild(modalas);
});