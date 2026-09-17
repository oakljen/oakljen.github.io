# Hero portrait handoff for Claude

User wants the website styled with the bold editorial feel of the supplied Hinata Sakai reference, using Oakley's own portrait. The hero MUST be a cutout PNG with actual alpha transparency.

Status: BLOCKED; no final image generated. Built-in image_gen failed opening both the original photo and the newly supplied higher-resolution photo because of a Windows sandbox error: SetTokenInformation(TokenDefaultDacl) failed: 1344. Do not reference a nonexistent final asset.

Latest identity source: C:/Users/User/Downloads/IMG_20260917_004711630.jpg
Style reference: C:/Users/User/AppData/Local/Temp/codex-clipboard-NDMUcg.png
Suggested final asset path once created: media/oakley-hero-cutout.png

Design direction: oversized condensed name typography, warm neutral backdrop, vermilion accent, large isolated editorial portrait. Keep background graphics and text in HTML/CSS. Keep face unobstructed and adapt the portrait for mobile. Preserve Oakley's actual website content.

Built-in image_gen was attempted; no CLI fallback used. CLI fallback requires explicit user agreement and OPENAI_API_KEY according to the imagegen skill.

Exact latest generation prompt:
Use case: identity-preserve. Create a polished photorealistic editorial website hero portrait of the same man in the supplied photo. Preserve his recognizable facial features, age, brown curly hair, build, natural skin texture and expression. Waist-up, relaxed upright posture, face turned very slightly toward viewer's left with gaze near camera. High-end soft directional studio lighting. Clean vermilion orange-red overshirt over dark charcoal crewneck, no logos, bold contemporary editorial style suitable for oversized white website typography layered over lower torso. Full hair, both shoulders and upper arms within frame with small clear margin, torso continues to bottom edge, hands outside crop. Portrait 2:3 composition. CRITICAL output: PNG with actual transparent alpha background and refined natural hair edges. Isolated person only, no room, no backdrop, no painted checkerboard, no shapes, no typography, no props, no watermarks. Preserve identity carefully.
