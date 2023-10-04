function updateProfilePicture() {
    const profileImageInput = document.getElementById('profileImage');
    const profilePicture = document.getElementById('profilePicture');
  
    const file = profileImageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profilePicture.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  