AFRAME.registerComponent('modify-model', {
    init: function () {
      const modelContainer = this.el;
      const avatarModel = document.querySelector('#avatarModel');
      
      avatarModel.addEventListener('model-loaded', function () {
        const model = modelContainer.getObject3D('mesh');
  
        if (model) {
          // Access specific parts of the model to modify them
          model.traverse(function (child) {
            if (child.isMesh) {
              if (child.name === 'Hat') { // Replace 'Hat' with the actual name of the part in the model
                child.material.color.set('green'); // Change the color to green
              } else if (child.name === 'Bag' || child.name === 'Sunglasses') { 
                child.visible = false; // Disable these components
              }
            }
          });
        }
      });
  
      modelContainer.setAttribute('gltf-model', '#avatarModel'); // Add the model to the scene
      modelContainer.setAttribute('animation', {
        property: 'position',
        to: '0 0.1 0.1',
        dur: 1000,
        easing: 'easeInOutQuad',
        loop: true,
        dir: 'alternate'
      });
    }
  });
  
  document.querySelector('#model-container').setAttribute('modify-model', '');
  