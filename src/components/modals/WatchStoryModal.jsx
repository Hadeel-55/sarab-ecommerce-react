import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const WatchStory = () => {
  const {t}=useTranslation()
  const [showVideo, setShowVideo] = useState(false);

  const youtubeVideoId = "OiAoQBTEfhM";

  return (
    <>
      <div
        className="hero-start-div d-flex gap-3 align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setShowVideo(true)}
      >
        <div className="hero-start-btn d-flex align-items-center justify-content-center">
          <FaPlay className="play-icon" />
        </div>
        <span className="story-text">{t('hero.story_btn')}</span>
      </div>

      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        size="lg"
        centered
        contentClassName="bg-transparent border-0"
      >
        <Modal.Header closeButton closeVariant="white" className="border-0" />
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WatchStory;
