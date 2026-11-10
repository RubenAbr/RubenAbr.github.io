using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class BlogpostsController : ControllerBase
{
    private readonly BlogpostService _service;

    public BlogpostsController(BlogpostService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BlogpostResponseDto>>> GetAll()
    {
        var blogposts = await _service.GetAllAsync();
        return Ok(blogposts);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BlogpostResponseDto>> GetById(int id)
    {
        var blogpost = await _service.GetByIdAsync(id);
        if (blogpost == null) return NotFound();
        return Ok(blogpost);
    }

    [HttpPost]
    public async Task<ActionResult<BlogpostResponseDto>> Create(CreateBlogpostDto dto)
    {
        var created = await _service.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateBlogpostDto dto)
    {
        var success = await _service.UpdateAsync(id, dto);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _service.DeleteAsync(id);
        if (!success) return NotFound();
        return NoContent();
    }
}