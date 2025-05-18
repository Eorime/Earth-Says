import styled from "styled-components";

export const screenshot = () => {
	const iconsContainer = document.querySelector(".icons-container");

	let originalDisplay = "flex";
	if (iconsContainer) {
		originalDisplay = window.getComputedStyle(iconsContainer).display;
		iconsContainer.style.display = "none";
	}

	const isIOS =
		/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (isIOS) {
		try {
			const canvas = document.createElement("canvas");
			const width = window.innerWidth;
			const height = window.innerHeight;
			const scale = window.devicePixelRatio || 1;

			canvas.width = width * scale;
			canvas.height = height * scale;
			canvas.style.width = width + "px";
			canvas.style.height = height + "px";

			const ctx = canvas.getContext("2d");
			ctx.scale(scale, scale);

			setTimeout(() => {
				const svgData = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
            <foreignObject width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml">
                ${document.body.outerHTML}
              </div>
            </foreignObject>
          </svg>
        `;

				const img = new Image();
				const svgBlob = new Blob([svgData], {
					type: "image/svg+xml;charset=utf-8",
				});
				const url = URL.createObjectURL(svgBlob);

				img.onload = () => {
					ctx.drawImage(img, 0, 0);

					const imgData = canvas.toDataURL("image/png");

					const newTab = window.open();
					if (newTab) {
						newTab.document.write(`
              <html>
                <head>
                  <title>EarthSays Screenshot</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body { margin: 0; padding: 10px; text-align: center; }
                    img { max-width: 100%; }
                    p { font-family: system-ui, sans-serif; }
                  </style>
                </head>
                <body>
                  <p>Press and hold image to save</p>
                  <img src="${imgData}" alt="EarthSays Screenshot" />
                </body>
              </html>
            `);
					}

					if (iconsContainer) {
						iconsContainer.style.display = originalDisplay;
					}

					URL.revokeObjectURL(url);
				};

				img.onerror = (error) => {
					console.error("SVG rendering failed:", error);
					showScreenshotFallbackMessage();

					// Restore the icons container
					if (iconsContainer) {
						iconsContainer.style.display = originalDisplay;
					}
				};

				img.src = url;
			}, 100);
		} catch (error) {
			console.error("iOS screenshot failed:", error);
			showScreenshotFallbackMessage();

			// Restore the icons container
			if (iconsContainer) {
				iconsContainer.style.display = originalDisplay;
			}
		}
	} else {
		// For non-iOS devices, try dom-to-image first, then fall back to html2canvas
		import("dom-to-image")
			.then((domtoimage) => {
				const node = document.body;

				domtoimage
					.toPng(node, {
						filter: (element) => {
							return !element.classList?.contains("icons-container");
						},
						bgcolor: null, // transparent background
					})
					.then((dataUrl) => {
						const link = document.createElement("a");
						link.href = dataUrl;
						link.download = "EarthSays.png";
						link.click();

						// Restore the icons container
						if (iconsContainer) {
							iconsContainer.style.display = originalDisplay;
						}
					})
					.catch((error) => {
						console.error("Dom-to-image failed, trying html2canvas:", error);

						// Fall back to html2canvas
						import("html2canvas")
							.then((html2canvasModule) => {
								const html2canvas = html2canvasModule.default;

								html2canvas(document.body, {
									backgroundColor: null,
									ignoreElements: (element) => {
										return element.classList?.contains("icons-container");
									},
								}).then((canvas) => {
									const dataUrl = canvas.toDataURL("image/png");
									const link = document.createElement("a");
									link.href = dataUrl;
									link.download = "EarthSays.png";
									link.click();

									// Restore the icons container
									if (iconsContainer) {
										iconsContainer.style.display = originalDisplay;
									}
								});
							})
							.catch((error) => {
								console.error("Both screenshot methods failed:", error);
								showScreenshotFallbackMessage();

								// Restore the icons container
								if (iconsContainer) {
									iconsContainer.style.display = originalDisplay;
								}
							});
					});
			})
			.catch((error) => {
				console.error("Dom-to-image import failed:", error);

				// Try html2canvas as fallback
				import("html2canvas")
					.then((html2canvasModule) => {
						const html2canvas = html2canvasModule.default;

						html2canvas(document.body, {
							backgroundColor: null,
							ignoreElements: (element) => {
								return element.classList?.contains("icons-container");
							},
						}).then((canvas) => {
							const dataUrl = canvas.toDataURL("image/png");
							const link = document.createElement("a");
							link.href = dataUrl;
							link.download = "EarthSays.png";
							link.click();

							// Restore the icons container
							if (iconsContainer) {
								iconsContainer.style.display = originalDisplay;
							}
						});
					})
					.catch((error) => {
						console.error("Both screenshot methods failed:", error);
						showScreenshotFallbackMessage();

						// Restore the icons container
						if (iconsContainer) {
							iconsContainer.style.display = originalDisplay;
						}
					});
			});
	}
};

const showScreenshotFallbackMessage = () => {
	const notification = document.createElement("div");
	notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    z-index: 9999;
    max-width: 80%;
    text-align: center;
    font-family: system-ui, sans-serif;
  `;
	notification.textContent =
		"Screenshot feature not supported on this device. Please use the default screenshot functionality instead </3.";
	document.body.appendChild(notification);

	setTimeout(() => {
		notification.style.opacity = "0";
		notification.style.transition = "opacity 0.5s ease";
		setTimeout(() => notification.remove(), 500);
	}, 4000);
};

// The styled components remain unchanged
export const Rectangle = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	cursor: pointer;
	transition: width 0.3s ease-in-out;
	transform-origin: center;
	border: 2px solid rgb(102, 102, 102);
	z-index: 0;
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		width: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Circle = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	border: 2px solid rgb(102, 102, 102);
`;

export const ScreenshotContainer = styled.div`
	position: relative;
	width: 40px;
	height: 20px;
	bottom: 0;
	cursor: pointer;

	&:active ${Rectangle}, &:active ${Circle} {
		border: 2px solid white;
	}
`;
