UPDATE users
SET 
    email = $2,
    hash = $3,
    first_name = $4,
    last_name = $5
WHERE 
    user_id = $1
    
returning *;