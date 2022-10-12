<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * 
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => false,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => false,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'The Shawshank Redemption',
                'category' => 'The Shawshank Redemption',
                'video_url' => 'https://youtu.be/oAzNQKbncxA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating'    => 4,
                'is_featured' => true,
            ],

        ];
        Movie::insert($movies);

    }
}
