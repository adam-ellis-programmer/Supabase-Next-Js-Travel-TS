// scripts/seed.ts
import { runSeeder } from '../seed/index'

async function main() {
  const args = process.argv.slice(2)
  const clearFirst = args.includes('--clear') || args.includes('-c')

  console.log('Starting seeder...')
  if (clearFirst) {
    console.log('⚠️  Clear mode enabled - existing data will be deleted\n')
  }

  try {
    const results = await runSeeder(clearFirst)
    const allSuccessful = results.every((r) => r.success)

    if (allSuccessful) {
      console.log('\n✅ All seeding operations completed successfully!')
      process.exit(0)
    } else {
      console.log('\n❌ Some seeding operations failed')
      process.exit(1)
    }
  } catch (error) {
    console.error('\n❌ Fatal error during seeding:', error)
    process.exit(1)
  }
}

main()
