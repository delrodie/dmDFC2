<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Services\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/email')]
class ApiEmailController extends AbstractController
{

    public function __construct(private MailerService $mailerService)
    {
    }

    #[Route('/', name: 'api_send_email', methods: ['POST'])]
    public function send(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        //dd($data);
        return new JsonResponse(['success' => 'Email envoyé avec succès']);
    }
}
