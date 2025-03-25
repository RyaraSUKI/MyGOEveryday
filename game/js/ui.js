/*带hidebar标签的页面则隐藏侧边栏，由于侧边栏已经隐藏，因此无法存档*/
$(document).on(':passagerender', _ => {
  if (tags().includes('hidebar')) {
    UIBar.hide().stow();
  }else{
    UIBar.show();
  }
});
