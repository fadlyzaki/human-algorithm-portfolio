import { describe, it, expect } from 'vitest';
import { normalizeProject } from '../utils';

describe('normalizeProject', () => {
  it('flattens bilingual top-level fields into _id suffix format', () => {
    const project = {
      title: { en: 'Hello', id: 'Halo' },
      desc: { en: 'Description', id: 'Deskripsi' },
    };

    const result = normalizeProject(project);

    expect(result.title).toBe('Hello');
    expect(result.title_id).toBe('Halo');
    expect(result.desc).toBe('Description');
    expect(result.desc_id).toBe('Deskripsi');
  });

  it('flattens bilingual array fields into EN and _id arrays', () => {
    const project = {
      process: [
        { title: { en: 'Research', id: 'Riset' }, desc: { en: 'Dig', id: 'Gali' } },
      ],
    };

    const result = normalizeProject(project);

    expect(result.process[0].title).toBe('Research');
    expect(result.process[0].desc).toBe('Dig');
    expect(result.process_id[0].title).toBe('Riset');
    expect(result.process_id[0].desc).toBe('Gali');
  });

  it('passes through non-bilingual fields unchanged', () => {
    const project = {
      id: 'test-project',
      stack: ['React', 'Node'],
      links: { demo: '#' },
    };

    const result = normalizeProject(project);

    expect(result.id).toBe('test-project');
    expect(result.stack).toEqual(['React', 'Node']);
    expect(result.links).toEqual({ demo: '#' });
  });

  it('normalizes nested details object into en/id variants', () => {
    const project = {
      details: {
        problem: { en: 'Pain', id: 'Masalah' },
        outcome: { en: 'Win', id: 'Sukses' },
      },
    };

    const result = normalizeProject(project);

    expect(result.details.problem).toBe('Pain');
    expect(result.details_id.problem).toBe('Masalah');
    expect(result.details.outcome).toBe('Win');
    expect(result.details_id.outcome).toBe('Sukses');
  });

  it('normalizes snapshot with bilingual tagline', () => {
    const project = {
      snapshot: {
        tagline: { en: 'Cool project', id: 'Proyek keren' },
        heroImage: 'airy:chart',
      },
    };

    const result = normalizeProject(project);

    expect(result.snapshot.tagline).toBe('Cool project');
    expect(result.snapshot_id.tagline).toBe('Proyek keren');
    // Non-bilingual field preserved
    expect(result.snapshot.heroImage).toBe('airy:chart');
  });

  it('handles empty/undefined input gracefully', () => {
    const result = normalizeProject({});
    expect(result).toEqual({});
  });

  it('preserves existing caseStudy_id when normalizing caseStudy', () => {
    const project = {
      caseStudy: {
        challenge: { en: 'English challenge', id: 'Tantangan ID' },
      },
      caseStudy_id: {
        challenge: 'Override ID tantangan',
      },
    };

    const result = normalizeProject(project);

    expect(result.caseStudy.challenge).toBe('English challenge');
    // caseStudy_id.challenge takes precedence from existing caseStudy_id
    expect(result.caseStudy_id.challenge).toBe('Override ID tantangan');
  });
});
