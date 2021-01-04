export const cacheAvatar = (avatar: any) => {
    const imgCanvas = document.createElement("canvas");
    const imgContext = imgCanvas.getContext("2d");

    imgCanvas.width = avatar.width;
    imgCanvas.height = avatar.height;

    imgContext.drawImage(avatar, 0, 0, avatar.width, avatar.height);
    const imgAsDataURL = imgCanvas.toDataURL("image/png");
    try {
        localStorage.setItem("avatar", imgAsDataURL);
    } catch (e) {
        console.log("Storage failed: " + e);
    }
};
