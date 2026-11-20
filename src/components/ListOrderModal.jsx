import { useEffect, useRef, useState } from 'react';
import { ImagePlus, MessageCircle, Send, Upload, X } from 'lucide-react';
import { isValidBdMobile } from '../lib/format';

export default function ListOrderModal({ copy, lang, open, onClose, onSent }) {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [error, setError] = useState('');
  const fileRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setText('');
      setPhone('');
      setPhoto(null);
      setPhotoName('');
      setError('');
    }
  }, [open]);

  if (!open) return null;

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(String(reader.result));
      setPhotoName(file.name);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const sendText = () => {
    if (!text.trim()) {
      setError(copy.list.listError);
      return;
    }
    onSent(copy.list.listSent);
    onClose();
  };

  const sendPhoto = () => {
    if (!photo) {
      setError(copy.list.photoError);
      return;
    }
    onSent(copy.list.photoSent);
    onClose();
  };

  const sendWhatsapp = () => {
    const message = text.trim() || copy.list.textareaPlaceholder;
    window.open(
      `${copy.list.whatsappUrl}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
    onSent(copy.list.listSent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-[#2A0B4A]/60 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={copy.list.title}
        className="animate-slide-up relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-surface shadow-lift sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-start gap-3 border-b border-line bg-surface px-5 py-4">
          <div className="min-w-0 flex-1">
            <h2 lang="bn" className="bn-tight text-[17px] font-bold text-brand">
              {copy.list.title}
            </h2>
            <p lang="bn" className="mt-1 text-[12.5px] leading-relaxed text-muted">
              {copy.list.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-canvas hover:text-ink"
          >
            <X className="h-4.5 w-4.5" strokeWidth={2.6} />
          </button>
        </div>

        <div className="space-y-4 px-5 py-4">
          {/* Text list */}
          <div>
            <label
              htmlFor="list-text"
              lang="bn"
              className="mb-1.5 block text-[13px] font-semibold text-ink"
            >
              {copy.list.textareaLabel}
            </label>
            <textarea
              id="list-text"
              rows={4}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setError('');
              }}
              placeholder={copy.list.textareaPlaceholder}
              className="w-full resize-none rounded-xl border border-line bg-white px-3.5 py-2.5 text-[13.5px] leading-relaxed text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-action"
            />
          </div>

          {/* Photo upload */}
          <div>
            <span lang="bn" className="mb-1.5 block text-[13px] font-semibold text-ink">
              {copy.list.photoLabel}
            </span>
            <div className="rounded-xl border border-dashed border-line bg-canvas p-3.5">
              {photo ? (
                <div className="flex items-center gap-3">
                  <img
                    src={photo}
                    alt="uploaded list preview"
                    className="h-16 w-16 shrink-0 rounded-lg border border-line object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px] font-medium text-ink">{photoName}</p>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="mt-1 text-[12px] font-semibold text-action underline-offset-2 hover:underline"
                    >
                      {copy.list.upload}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full flex-col items-center gap-1.5 py-2 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-muted">
                    <ImagePlus className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span lang="bn" className="text-[13px] font-semibold text-ink">
                    {copy.list.upload}
                  </span>
                  <span lang="bn" className="text-[11.5px] leading-relaxed text-muted">
                    {copy.list.photoHint}
                  </span>
                </button>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="list-phone"
              lang="bn"
              className="mb-1.5 block text-[13px] font-semibold text-ink"
            >
              {copy.list.phoneLabel}
            </label>
            <input
              id="list-phone"
              type="tel"
              inputMode="numeric"
              maxLength={14}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="num w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[13.5px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-action"
            />
            <p lang="bn" className="mt-1 text-[11.5px] leading-relaxed text-muted">
              {copy.list.phoneHint}
            </p>
          </div>

          {error && (
            <p lang="bn" className="rounded-lg bg-[#FEF3C7] px-3 py-2 text-[12.5px] font-medium text-[#D97706]">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={sendText}
              className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-action text-[13.5px] font-bold text-white transition-colors hover:bg-action-dark"
            >
              <Send className="h-4 w-4" strokeWidth={2.4} />
              {copy.list.sendList}
            </button>
            <button
              type="button"
              onClick={sendPhoto}
              className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-white text-[13.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Upload className="h-4 w-4" strokeWidth={2.4} />
              {copy.list.sendPhoto}
            </button>
          </div>

          <button
            type="button"
            onClick={sendWhatsapp}
            className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] text-[13.5px] font-bold text-white transition-colors hover:bg-[#1eb35a]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            {copy.list.sendWhatsapp}
          </button>
        </div>
      </div>
    </div>
  );
}
