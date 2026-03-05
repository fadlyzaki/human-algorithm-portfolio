export const blogPosts = {
    "future-of-ai": {
        title:
            "The End of The Screen: Why interfaces are dissolving into ambient computing.",
        subtitle:
            "We are moving from 'Glassholes' to 'Air-gapped' interactions. Here is what that means for designers.",
        date: "Oct 12, 2025",
        readTime: "8 min read",
        tags: ["Philosophy", "HCI", "Hardware"],
        coverImage: "linear-gradient(45deg, var(--bg-surface), var(--border-color))",
        content: [
            {
                type: "paragraph",
                text: "The glass rectangle has been our primary mode of interaction for nearly two decades. From the original iPhone to the latest bezel-less vision, we have been obsessed with 'more pixels'. But the next era of computing isn't about better screens. It's about no screens at all.",
            },
            {
                type: "heading",
                text: "The Ambient Era",
            },
            {
                type: "paragraph",
                text: "Imagine a world where the internet isn't a place you go (a phone, a laptop), but a layer on top of reality. This isn't just AR glasses. It's audio-first interfaces, haptic feedback suits for remote workers, and AI agents that negotiate your calendar without you ever opening an app.",
            },
            {
                type: "blockquote",
                text: "The best interface is no interface. The best interaction is the one you didn't have to perform.",
            },
            {
                type: "paragraph",
                text: "As designers, we are trained to organize buttons on a grid. But how do you design a 'gesture'? How do you design a 'whisper'? The skill set is shifting from Visual Design to Behavioral Choreography.",
            },
            {
                type: "code",
                lang: "python",
                code: `def ambient_interaction(user_intent):
    if context.is_busy():
        return haptic_nudge(intensity=0.2)
    else:
        return voice_summary(verbosity="low")`,
            },
            {
                type: "paragraph",
                text: "We need to stop thinking in pages and start thinking in flows. The 'User Journey' is no longer a linear path through a sitemap; it's a probabilistic cloud of intent.",
            },
        ],
    },
};
