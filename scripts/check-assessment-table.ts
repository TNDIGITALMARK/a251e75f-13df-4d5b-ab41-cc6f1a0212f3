import { createClient } from '@supabase/supabase-js';

async function checkTable() {
  const supabase = createClient(
    'https://hfndfmtxhqvubnfiwzlz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
    {
      global: {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IlZmQ1JyMGdSZ0picUtwaFNESDNoZE56R0lFazEiLCJwcm9qZWN0X2lkIjoiYTI1MWU3NWYtMTNkZi00ZDViLWFiNDEtY2M2ZjFhMDIxMmYzIiwianRpIjoiNmQwNTFiNjYtYjI4Yy00OWE3LWI3OTMtZGM3Zjc2OGQ0OTZkIiwiaWF0IjoxNzYzNDc5NDM5LCJleHAiOjE3NjM0ODIxMzl9.eE5CVD-SMBCJnDWyk5O0qmG35fjrjLVr-MnzSf8uBUI`
        }
      }
    }
  );

  // Check if assessments table exists
  const { error, count } = await supabase
    .from('assessments')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.log('✗ assessments table does not exist');
    console.log('Error:', error.message);
    console.log('\nWe will proceed without database persistence for now.');
    console.log('Assessment data will be stored in browser state only.');
  } else {
    console.log('✓ assessments table exists with', count, 'rows');
  }
}

checkTable();
