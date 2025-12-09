export function parseContent(rawContent: string): string {
    let html = rawContent || "";

    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3 id="$1" class="scroll-mt-24">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 id="$1" class="scroll-mt-24">$1</h2>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre class="language-${lang || 'plaintext'}"><code>${code.trim()}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Tables
    html = html.replace(/\|(.+)\|\n\|[-\s|]+\|\n((?:\|.+\|\n?)+)/g, (match, header, rows) => {
        const headerCells = header.split('|').filter((c: string) => c.trim()).map((c: string) => `<th>${c.trim()}</th>`).join('');
        const bodyRows = rows.trim().split('\n').map((row: string) => {
            const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => `<td>${c.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    });

    // Lists (unordered)
    html = html.replace(/^- (.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Lists (ordered)
    html = html.replace(/^\d+\. (.*)$/gm, '<li>$1</li>');

    // Paragraphs
    html = html.split('\n\n').map(block => {
        if (block.startsWith('<') || block.trim() === '') return block;
        return `<p>${block}</p>`;
    }).join('\n');

    // Clean up multiple newlines
    html = html.replace(/\n{3,}/g, '\n\n');

    return html;
}

export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
    const headings: { id: string; text: string; level: number }[] = [];
    const regex = /^(#{2,3}) (.*)$/gm;
    let match;

    while ((match = regex.exec(content)) !== null) {
        headings.push({
            id: match[2].replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase(),
            text: match[2],
            level: match[1].length,
        });
    }

    return headings;
}
