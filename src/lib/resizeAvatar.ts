const resizeAvatar = (src: string, size: number) => {
    if (src && size && src.includes('/s:/')) {
      return src.replace('/s:/', '/s:' + size + ':' + size + '/');
    } else {
      return src;
    }
  };

  export default resizeAvatar;