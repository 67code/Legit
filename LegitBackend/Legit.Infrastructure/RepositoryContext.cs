using Legit.Domain.Models;
using Microsoft.EntityFrameworkCore;
namespace Legit.Infrastructure;
public class RepositoryContext : DbContext
{
    public RepositoryContext(DbContextOptions<RepositoryContext> options)
        : base(options)
    {
    }
  
    public DbSet<CompanyDetails> CompanyDetails { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Set the default schema for all tables
        modelBuilder.HasDefaultSchema("syed");

        base.OnModelCreating(modelBuilder);
    }
}
