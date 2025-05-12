import React, { useState } from "react";

export default function SocialButton({ href, label, className, toggleFollow }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = (e) => {
    if (toggleFollow) {
      e.preventDefault(); 
      setIsFollowing((prev) => !prev);
    }
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {toggleFollow
        ? isFollowing
          ? "FOLLOWING"
          : "FOLLOW"
        : label}
    </a>
  );
}
