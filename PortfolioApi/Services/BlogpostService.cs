using Microsoft.EntityFrameworkCore;

public class BlogpostService
{
    private readonly PortfolioDbContext _context;

    public BlogpostService(PortfolioDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<BlogpostResponseDto>> GetAllAsync()
    {
        return await _context.Blogposts
            .Select(b => new BlogpostResponseDto
            {
                Id = b.Id,
                Titel = b.Titel,
                Inhoud = b.Inhoud,
                Publicatiedatum = b.Publicatiedatum
            })
            .ToListAsync();
    }

    public async Task<BlogpostResponseDto?> GetByIdAsync(int id)
    {
        var blogpost = await _context.Blogposts.FindAsync(id);
        if (blogpost == null) return null;

        return new BlogpostResponseDto
        {
            Id = blogpost.Id,
            Titel = blogpost.Titel,
            Inhoud = blogpost.Inhoud,
            Publicatiedatum = blogpost.Publicatiedatum
        };
    }

    public async Task<BlogpostResponseDto> CreateAsync(CreateBlogpostDto dto)
    {
        var blogpost = new Blogpost
        {
            Titel = dto.Titel,
            Inhoud = dto.Inhoud,
            Publicatiedatum = dto.Publicatiedatum
        };

        _context.Blogposts.Add(blogpost);
        await _context.SaveChangesAsync();

        return new BlogpostResponseDto
        {
            Id = blogpost.Id,
            Titel = blogpost.Titel,
            Inhoud = blogpost.Inhoud,
            Publicatiedatum = blogpost.Publicatiedatum
        };
    }

    public async Task<bool> UpdateAsync(int id, UpdateBlogpostDto dto)
    {
        var blogpost = await _context.Blogposts.FindAsync(id);
        if (blogpost == null) return false;

        blogpost.Titel = dto.Titel;
        blogpost.Inhoud = dto.Inhoud;
        blogpost.Publicatiedatum = dto.Publicatiedatum;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var blogpost = await _context.Blogposts.FindAsync(id);
        if (blogpost == null) return false;

        _context.Blogposts.Remove(blogpost);
        await _context.SaveChangesAsync();
        return true;
    }
}